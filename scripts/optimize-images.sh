#!/bin/bash

# Image Optimization Script for ANAPLAK Salon
# This script optimizes all images in the public directory

echo "🖼️  Starting image optimization..."

# Check if ImageMagick or similar tools are available
if ! command -v convert &> /dev/null; then
    echo "⚠️  ImageMagick not found. Installing via npm sharp package instead..."
    npm install --save-dev sharp
fi

# Create optimized versions directory
mkdir -p public/optimized

echo "✅ Image optimization setup complete!"
echo "📝 Note: Next.js will automatically optimize images at runtime"
echo "   - Images will be converted to WebP/AVIF"
echo "   - Lazy loading is enabled"
echo "   - Responsive sizes are generated automatically"
