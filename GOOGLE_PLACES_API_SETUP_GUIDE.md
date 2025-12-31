# Google Places API Setup Guide - REQUEST_DENIED Fix

## Issue
Error: `REQUEST_DENIED` from Google Places API
This means the API key is not authorized to use the Places API.

## Solution Steps

### Step 1: Go to Google Cloud Console
1. Visit: https://console.cloud.google.com/
2. Sign in with your Google account

### Step 2: Select or Create a Project
1. Click on the project dropdown at the top
2. Select your existing project OR create a new one

### Step 3: Enable Places API
1. Go to: https://console.cloud.google.com/apis/library
2. Search for "Places API"
3. Click on "Places API" (NOT "Places API (New)")
4. Click the **"ENABLE"** button
5. Wait for it to enable (takes a few seconds)

### Step 4: Verify API Key Restrictions (Important!)
1. Go to: https://console.cloud.google.com/apis/credentials
2. Find your API key: `AIzaSyAJU6KzOpjkIpbzwqrDHEt9YCPllOI0qNk`
3. Click on the API key to edit it
4. Under "API restrictions":
   - Select **"Restrict key"**
   - Check ✅ **"Places API"**
   - Click **"Save"**

### Step 5: Set Application Restrictions (Optional but Recommended)
For development:
- Select **"None"** (for testing)

For production:
- Select **"HTTP referrers (web sites)"**
- Add your domain: `https://anaplakartandglamsalon.com/*`
- Add localhost for testing: `http://localhost:3000/*`

### Step 6: Restart Your Development Server
```bash
# Stop the server (Ctrl+C)
# Then restart:
npm run dev
```

### Step 7: Verify It Works
1. Refresh your browser
2. Check the console - you should see:
   - ✅ `Google API Response Status: OK`
   - ✅ `Total reviews from API: [number]`
   - ✅ Reviews loading on the page

---

## Alternative: Create a New API Key

If the above doesn't work, create a fresh API key:

### Create New API Key:
1. Go to: https://console.cloud.google.com/apis/credentials
2. Click **"+ CREATE CREDENTIALS"**
3. Select **"API key"**
4. Copy the new API key
5. Click **"RESTRICT KEY"**
6. Under "API restrictions":
   - Select **"Restrict key"**
   - Check ✅ **"Places API"**
7. Click **"Save"**

### Update .env file:
```bash
GOOGLE_PLACES_API_KEY=YOUR_NEW_API_KEY_HERE
GOOGLE_PLACE_ID=ChIJ5R3P1HxIuJoRk3OviXZ9FVA
```

### Restart server:
```bash
npm run dev
```

---

## Common Issues & Solutions

### Issue: "API key not valid"
**Solution**: Make sure you copied the entire API key without spaces

### Issue: "This API project is not authorized"
**Solution**: Enable "Places API" in the API Library

### Issue: "REQUEST_DENIED" persists
**Solution**: 
1. Check if billing is enabled on your Google Cloud project
2. Some APIs require billing to be enabled even for free tier usage

### Issue: "OVER_QUERY_LIMIT"
**Solution**: You've exceeded the free tier quota
- Free tier: 1,000 requests per day
- Consider implementing caching or upgrading to paid tier

---

## Verify Your Setup

### Quick Checklist:
- [ ] Google Cloud project created
- [ ] Places API enabled
- [ ] API key created
- [ ] API key has "Places API" restriction
- [ ] API key copied to .env file
- [ ] Development server restarted
- [ ] Browser refreshed

### Test the API Directly:
Open this URL in your browser (replace with your API key):
```
https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ5R3P1HxIuJoRk3OviXZ9FVA&fields=reviews,rating,user_ratings_total&key=YOUR_API_KEY
```

If it works, you should see JSON with reviews data.
If it fails, you'll see the error message.

---

## Fallback: Use Static Reviews (Temporary)

While you fix the API, the site will automatically use fallback static reviews, so your site won't break. The testimonials component has 5 hardcoded reviews that will display if the API fails.

---

## Need Help?

If you're still getting errors:
1. Check the browser console for detailed error messages
2. Check the terminal/server logs
3. Verify your Google Cloud billing status
4. Make sure the API key hasn't been deleted or regenerated

---

## Expected Result After Fix:

✅ Console will show:
```
Google API Response Status: OK
Total reviews from API: 5
Received reviews data: {...}
```

✅ Website will show:
- Real Google reviews from customers
- Google rating badge (4.9★)
- Customer profile photos
- Review timestamps ("2 weeks ago", etc.)
- Auto-rotating carousel

---

**Status**: Follow the steps above to enable Places API in Google Cloud Console
