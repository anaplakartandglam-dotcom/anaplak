# How to See Latest Google Reviews

## ✅ Changes Made

I've updated the caching settings to refresh reviews more frequently:

1. **API Cache**: Changed from 1 hour → **60 seconds**
2. **Page Cache**: Changed from 1 hour → **60 seconds**

## 🔄 To See Your New Review NOW:

### Option 1: Force Refresh (Quickest)
1. Open your browser
2. Press **Cmd + Shift + R** (Mac) or **Ctrl + Shift + F5** (Windows)
3. This bypasses all caches

### Option 2: Clear Next.js Cache
```bash
# Stop the dev server (Ctrl+C)
# Delete the cache folder
rm -rf .next

# Restart
npm run dev
```

### Option 3: Wait 60 Seconds
- The page will automatically refresh after 60 seconds
- New reviews will appear on the next page load

## ⚠️ Important Notes:

### Google's Review Delay
Even after you post a review on Google, it may take **5-15 minutes** for Google's API to include it in the response. This is on Google's side, not your website.

### Review Moderation
Google moderates reviews before they appear in the API:
- New reviews may take 10-30 minutes to show up
- Some reviews may be held for manual review
- Reviews from new Google accounts may take longer

### API Limitations
- Google Places API returns maximum **5 reviews**
- Reviews are sorted by Google's "most helpful" algorithm
- Your new review might not appear if it's not in the top 5 most helpful

## 🔍 Debug Steps:

1. **Check if review is on Google Maps**:
   - Go to your Google Business profile
   - See if the review appears there
   - If it's not there, Google is still processing it

2. **Check API Response**:
   - Open browser console (F12)
   - Look for logs: `"Received reviews data:"`
   - Check if your review is in the response

3. **Check Review Count**:
   - The badge shows total review count
   - If count increased but review not showing, it's not in top 5

## 💡 Recommendation:

For production, you might want to:
- Keep cache at 60 seconds during business hours
- Increase to 5-10 minutes during off-hours to reduce API calls
- Or use a webhook from Google My Business to update in real-time
