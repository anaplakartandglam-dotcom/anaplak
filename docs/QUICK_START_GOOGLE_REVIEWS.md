# Quick Start: Google Reviews Setup

## What You Need

1. **Google Places API Key** - Get from [Google Cloud Console](https://console.cloud.google.com/)
2. **Your Business Place ID** - Find your salon's unique Google identifier

## 5-Minute Setup

### 1. Get API Key
```
1. Go to: https://console.cloud.google.com/
2. Create/Select Project
3. Enable "Places API"
4. Create API Key
5. Copy the key
```

### 2. Find Place ID
```
Option A: Use this tool
https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder

Option B: Search your salon on Google Maps
Look for ID in URL (starts with "ChIJ...")
```

### 3. Add to Your Project
```bash
# Create .env.local file in project root
GOOGLE_PLACES_API_KEY=your_api_key_here
GOOGLE_PLACE_ID=your_place_id_here
```

### 4. Deploy
```bash
# Add to Vercel (or your hosting)
vercel env add GOOGLE_PLACES_API_KEY
vercel env add GOOGLE_PLACE_ID

# Redeploy
vercel --prod
```

## That's It! 🎉

Your website will now show real Google reviews automatically.

## Verify It's Working

1. Visit your About page
2. Look for "Real reviews from Google" text
3. Reviews should update automatically

## Need Help?

See the full guide: `GOOGLE_REVIEWS_SETUP.md`

## Cost

- FREE for most websites (Google gives $200/month credit)
- Reviews cached for 1 hour to save API calls
