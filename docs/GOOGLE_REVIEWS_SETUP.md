# Google Reviews Integration Setup Guide

This guide will help you set up Google Reviews integration for your salon website.

## Overview

The website now fetches **real customer reviews** from Google instead of using static content. Reviews are automatically updated and displayed on your About page and homepage.

## Features

✅ **Real-time Google Reviews** - Fetches actual customer reviews from Google  
✅ **Automatic Filtering** - Only shows 4-5 star reviews  
✅ **Smart Sorting** - Prioritizes highest-rated and most recent reviews  
✅ **Fallback Support** - Shows static reviews if API fails  
✅ **Loading States** - Smooth user experience with loading indicators  
✅ **Caching** - Reviews are cached for 1 hour to optimize performance  

## Setup Instructions

### Step 1: Get Google Places API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Places API**:
   - Navigate to "APIs & Services" → "Library"
   - Search for "Places API"
   - Click "Enable"
4. Create API credentials:
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy your API key

### Step 2: Find Your Google Place ID

**Option 1: Use Place ID Finder Tool**
1. Visit [Place ID Finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder)
2. Search for "Anaplak Art and Glam Salon"
3. Click on your business location
4. Copy the Place ID (starts with "ChIJ...")

**Option 2: Use Google Maps**
1. Search for your salon on [Google Maps](https://www.google.com/maps)
2. Click on your business
3. Look at the URL - the Place ID is in the URL after `!1s`
4. Example: `https://www.google.com/maps/place/...!1s0x3bae1670c9b44e6d:0x27f28a2916013aa9!...`
   - Place ID would be: `ChIJbU60ybAWrjsRqToBFikooic`

**Option 3: Use Places API Place Search**
```bash
curl "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Anaplak%20Art%20and%20Glam%20Salon&inputtype=textquery&fields=place_id,name&key=YOUR_API_KEY"
```

### Step 3: Configure Environment Variables

1. Create a `.env.local` file in the root directory:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your credentials:
   ```env
   GOOGLE_PLACES_API_KEY=AIzaSyC...your_actual_api_key
   GOOGLE_PLACE_ID=ChIJ...your_actual_place_id
   ```

3. **Important**: Never commit `.env.local` to version control!

### Step 4: Secure Your API Key (Recommended)

1. In Google Cloud Console, restrict your API key:
   - Go to "APIs & Services" → "Credentials"
   - Click on your API key
   - Under "API restrictions", select "Restrict key"
   - Choose "Places API"
   - Under "Application restrictions":
     - For production: Use "HTTP referrers" and add your domain
     - For development: Use "None" (but be careful!)

### Step 5: Deploy to Vercel (or your hosting platform)

1. Add environment variables to your deployment:
   
   **For Vercel:**
   ```bash
   vercel env add GOOGLE_PLACES_API_KEY
   vercel env add GOOGLE_PLACE_ID
   ```
   
   Or via Vercel Dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add both variables

2. Redeploy your application

## Testing

### Local Testing

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Visit the About page: `http://localhost:3000/about`

3. Check the browser console for any errors

4. Verify that reviews are loading (you should see "Real reviews from Google" text)

### API Testing

Test the API endpoint directly:
```bash
curl http://localhost:3000/api/reviews
```

Expected response:
```json
{
  "reviews": [
    {
      "name": "Customer Name",
      "role": "Google Review",
      "text": "Review text...",
      "rating": 5,
      "time": 1234567890,
      "relativeTime": "2 weeks ago"
    }
  ],
  "totalRating": 4.8,
  "totalReviews": 150
}
```

## Troubleshooting

### Reviews Not Loading

1. **Check environment variables**:
   ```bash
   # In your terminal
   echo $GOOGLE_PLACES_API_KEY
   echo $GOOGLE_PLACE_ID
   ```

2. **Check API key permissions**:
   - Ensure Places API is enabled
   - Verify API key restrictions aren't blocking requests

3. **Check browser console** for error messages

4. **Test the API endpoint** directly: `/api/reviews`

### API Errors

- **"API configuration missing"** → Environment variables not set
- **"INVALID_REQUEST"** → Wrong Place ID format
- **"REQUEST_DENIED"** → API key issue or Places API not enabled
- **"OVER_QUERY_LIMIT"** → Exceeded API quota (check Google Cloud Console)

### Fallback Reviews

If the API fails, the component automatically shows static fallback reviews. This ensures your site always displays testimonials.

## Cost Considerations

- Google Places API offers a **free tier**: $200 credit per month
- Place Details requests cost: **$0.017 per request**
- With 1-hour caching, you'll use approximately:
  - ~720 requests/month (if page is visited constantly)
  - Cost: ~$12/month
- Most sites will use far less and stay within the free tier

## Customization

### Change Review Filtering

Edit `/components/testimonials.tsx`:

```typescript
// Show all reviews (including lower ratings)
.filter((review: any) => review.rating >= 1)

// Show only 5-star reviews
.filter((review: any) => review.rating === 5)
```

### Change Number of Reviews

```typescript
.slice(0, 10) // Change 10 to any number
```

### Adjust Cache Duration

Edit `/app/api/reviews/route.ts`:

```typescript
next: { revalidate: 3600 } // 3600 seconds = 1 hour
// Change to 7200 for 2 hours, 1800 for 30 minutes, etc.
```

## Support

For issues or questions:
1. Check the browser console for errors
2. Verify API credentials in Google Cloud Console
3. Test the `/api/reviews` endpoint directly
4. Review the Google Places API documentation

## Additional Resources

- [Google Places API Documentation](https://developers.google.com/maps/documentation/places/web-service/overview)
- [Place Details API](https://developers.google.com/maps/documentation/places/web-service/details)
- [API Key Best Practices](https://developers.google.com/maps/api-security-best-practices)
