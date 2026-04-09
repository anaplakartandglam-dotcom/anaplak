import { NextResponse } from 'next/server'

export const revalidate = 3600

interface GoogleReview {
    author_name: string
    rating: number
    text: string
    time: number
    profile_photo_url?: string
    relative_time_description?: string
}

interface GooglePlaceDetailsResponse {
    result?: {
        reviews?: GoogleReview[]
        rating?: number
        user_ratings_total?: number
    }
    status: string
}

export async function GET() {
    try {
        const apiKey = process.env.GOOGLE_PLACES_API_KEY
        const placeId = process.env.GOOGLE_PLACE_ID

        if (!apiKey || !placeId) {
            // Silently return error without verbose logging
            return NextResponse.json(
                { error: 'API configuration missing' },
                { status: 500 }
            )
        }

        // Fetch place details including reviews
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`,
            {
                next: { revalidate: 3600 } // cache for 1 hour
            }
        )

        if (!response.ok) {
            return NextResponse.json(
                { error: 'Failed to fetch reviews from Google' },
                { status: 500 }
            )
        }

        const data: GooglePlaceDetailsResponse = await response.json()

        if (data.status !== 'OK' || !data.result?.reviews) {
            // Silently return error - client will use fallback reviews
            return NextResponse.json(
                { error: 'Failed to fetch reviews', status: data.status },
                { status: 500 }
            )
        }

        // Transform Google reviews to our format
        const reviews = data.result.reviews.map((review) => ({
            name: review.author_name,
            role: 'Google Review',
            text: review.text,
            rating: review.rating,
            time: review.time,
            relativeTime: review.relative_time_description,
            photoUrl: review.profile_photo_url,
        }))

        return NextResponse.json({
            reviews,
            totalRating: data.result.rating,
            totalReviews: data.result.user_ratings_total,
        })
    } catch (error) {
        // Silently catch errors - client will use fallback reviews
        return NextResponse.json(
            { error: 'Failed to fetch reviews' },
            { status: 500 }
        )
    }
}
