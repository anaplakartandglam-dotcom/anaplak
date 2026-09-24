# Deployment Guide - Fix Reviews Not Updating

## ✅ Changes Made to Fix Review Caching

### 1. **API Route Updates** (`/app/api/reviews/route.ts`)
- Added explicit cache-control headers
- Set `Cache-Control: no-store, no-cache, must-revalidate`
- Added `Pragma: no-cache` and `Expires: 0`

### 2. **Client-Side Updates** (`/components/testimonials.tsx`)
- Added timestamp to API requests to prevent browser caching
- Added `cache: 'no-store'` to fetch options
- Added cache-control headers to fetch request

---

## 🚀 Deployment Steps

### **Step 1: Rebuild the Application**
```bash
cd /root/anaplakartweb
npm run build
```

### **Step 2: Restart PM2**
```bash
pm2 restart anaplakartweb
```

### **Step 3: Clear Any CDN/Proxy Cache** (if applicable)
If you're using Cloudflare, Nginx, or any CDN:
```bash
# For Nginx (if applicable)
sudo nginx -s reload

# For Cloudflare - purge cache from dashboard
```

### **Step 4: Verify the Fix**
```bash
# Check PM2 logs
pm2 logs anaplakartweb --lines 50

# Test the API endpoint directly
curl -I https://anaplakartandglamsalon.com/api/reviews
```

---

## 🔍 Troubleshooting

### **If Reviews Still Don't Update:**

#### 1. **Check API Response**
```bash
curl https://anaplakartandglamsalon.com/api/reviews
```
This should return the latest reviews from Google.

#### 2. **Check Browser Cache**
- Open browser DevTools (F12)
- Go to Network tab
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check if `/api/reviews` shows fresh data

#### 3. **Check Google API Quota**
The Google Places API might have rate limits. Check:
- Google Cloud Console
- APIs & Services → Dashboard
- Check quota usage

#### 4. **Verify Environment Variables**
```bash
# Check if .env file has correct values
cat .env | grep GOOGLE
```

Should show:
```
GOOGLE_PLACES_API_KEY=your_api_key
GOOGLE_PLACE_ID=ChIJ5R3P1HxIuJoRk3OviXZ9FVA
```

---

## 📊 How the Fix Works

### **Before (Cached):**
```
Browser → Cached Response (old reviews)
```

### **After (Fresh):**
```
Browser → API (/api/reviews?t=1234567890)
         ↓
    Google Places API (fresh data)
         ↓
    Response with no-cache headers
         ↓
    Browser (always fresh reviews)
```

---

## ⏱️ Review Update Timeline

### **Google's Side:**
- Reviews appear on Google: **Immediately**
- Google API updates: **Within 1-2 hours** (Google's cache)

### **Your Website:**
- API fetches from Google: **Real-time** (no cache)
- Page revalidation: **Every 60 seconds**
- Browser cache: **Disabled** (with our fix)

**Note:** If a review was just posted on Google, it might take 1-2 hours for Google's API to include it in the response.

---

## 🔄 Quick Deployment Commands

```bash
# Full deployment sequence
cd /root/anaplakartweb
npm run build
pm2 restart anaplakartweb
pm2 logs anaplakartweb --lines 20
```

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] Build completed successfully
- [ ] PM2 shows "online" status
- [ ] API endpoint returns 200 status
- [ ] Response headers include `Cache-Control: no-store`
- [ ] Latest reviews appear on website
- [ ] Hard refresh shows updated data
- [ ] Mobile view also shows latest reviews

---

## 📝 Additional Notes

### **Cache Headers Explained:**
- `no-store` - Don't store in cache at all
- `no-cache` - Revalidate before using cached version
- `must-revalidate` - Must check with server
- `max-age=0` - Expire immediately
- `Pragma: no-cache` - HTTP/1.0 compatibility
- `Expires: 0` - Legacy cache control

### **Why Timestamp in URL?**
Adding `?t=1234567890` makes each request unique, preventing browser from using cached response.

---

## 🆘 Still Having Issues?

### **Check These:**

1. **Server Time**
   ```bash
   date
   ```
   Ensure server time is correct.

2. **Node.js Version**
   ```bash
   node --version
   ```
   Should be 18.x or higher.

3. **PM2 Status**
   ```bash
   pm2 status
   pm2 info anaplakartweb
   ```

4. **Application Logs**
   ```bash
   pm2 logs anaplakartweb --lines 100
   ```
   Look for any errors related to Google API.

5. **Network Issues**
   ```bash
   curl -v https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ5R3P1HxIuJoRk3OviXZ9FVA&fields=reviews&key=YOUR_API_KEY
   ```

---

## ✨ Expected Result

After deployment:
- ✅ Reviews update within 1-2 hours of being posted on Google
- ✅ No browser caching issues
- ✅ Fresh data on every page load
- ✅ Proper cache headers in response
- ✅ Mobile and desktop both show latest reviews

---

## 🔐 Security Note

The API key in `.env` should never be committed to git. Ensure:
```bash
# Check .gitignore includes .env
cat .gitignore | grep .env
```

---

**Deployment Complete!** 🚀

Your reviews should now update properly. If you still see old reviews after 2 hours, check the Google API response directly to confirm Google has the latest data.
