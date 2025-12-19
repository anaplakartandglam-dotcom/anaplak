import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

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
            console.error('Missing Google API credentials')
            return NextResponse.json(
                { error: 'API configuration missing' },
                { status: 500 }
            )
        }

        // Fetch place details including reviews
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`,
            {
                cache: 'no-store' // Always fetch fresh reviews - no caching
            }
        )

        if (!response.ok) {
            throw new Error('Failed to fetch reviews from Google')
        }

        const data: GooglePlaceDetailsResponse = await response.json()

        // Debug logging
        console.log('Google API Response Status:', data.status)
        console.log('Total reviews from API:', data.result?.reviews?.length)
        console.log('First review sample:', data.result?.reviews?.[0])

        if (data.status !== 'OK' || !data.result?.reviews) {
            console.error('Google API error:', data.status)
            return NextResponse.json(
                { error: 'Failed to fetch reviews', status: data.status },
                { status: 500 }
            )
        }

        // Transform Google reviews to our format
        const reviews = data.result.reviews.map((review) => {
            console.log('Review photo URL:', review.profile_photo_url)
            return {
                name: review.author_name,
                role: 'Google Review',
                text: review.text,
                rating: review.rating,
                time: review.time,
                relativeTime: review.relative_time_description,
                photoUrl: review.profile_photo_url,
            }
        })

        console.log('=== ALL REVIEWS FROM GOOGLE API ===')
        console.log('Total reviews fetched:', reviews.length)
        reviews.forEach((review, idx) => {
            console.log(`${idx + 1}. ${review.name} - ${review.rating}★ - ${review.relativeTime}`)
        })
        console.log('===================================')

        return NextResponse.json({
            reviews,
            totalRating: data.result.rating,
            totalReviews: data.result.user_ratings_total,
        }, {
            headers: {
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        })
    } catch (error) {
        console.error('Error fetching Google reviews:', error)
        return NextResponse.json(
            { error: 'Failed to fetch reviews' },
            { status: 500 }
        )
    }
}
