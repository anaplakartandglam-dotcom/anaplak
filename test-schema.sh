#!/bin/bash

# 🧪 Quick Schema Testing Script
# This script helps you quickly test your schema markup

echo "🚀 Anaplak Salon - Schema Markup Testing Helper"
echo "================================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}📊 Testing Options:${NC}"
echo ""
echo "1. Open Google Rich Results Test"
echo "2. Open Schema Validator"
echo "3. Open Google Search Console"
echo "4. Open PageSpeed Insights"
echo "5. View Local Site (localhost:3000)"
echo "6. Check Schema in Browser Console"
echo ""

# Quick links
echo -e "${GREEN}🔗 Quick Testing Links:${NC}"
echo ""
echo "Rich Results Test: https://search.google.com/test/rich-results"
echo "Schema Validator: https://validator.schema.org/"
echo "Search Console: https://search.google.com/search-console"
echo "PageSpeed Insights: https://pagespeed.web.dev/"
echo ""

# Local testing instructions
echo -e "${YELLOW}📝 Quick Local Testing Steps:${NC}"
echo ""
echo "1. Open: http://localhost:3000"
echo "2. Right-click → 'View Page Source'"
echo "3. Search for: application/ld+json"
echo "4. Copy all HTML (Ctrl+A, Ctrl+C)"
echo "5. Go to: https://search.google.com/test/rich-results"
echo "6. Click 'CODE' tab"
echo "7. Paste HTML and click 'Test Code'"
echo ""

# Pages to test
echo -e "${GREEN}📄 Pages to Test:${NC}"
echo ""
echo "✅ Home: http://localhost:3000"
echo "✅ About: http://localhost:3000/about"
echo "✅ Services: http://localhost:3000/services"
echo "✅ Contact: http://localhost:3000/contact"
echo ""

# Expected schema types
echo -e "${BLUE}🎯 Expected Schema Types:${NC}"
echo ""
echo "Home Page:"
echo "  - LocalBusiness (HairSalon)"
echo "  - AggregateRating"
echo "  - OfferCatalog"
echo ""
echo "About Page:"
echo "  - AboutPage"
echo "  - FAQPage (4 questions)"
echo "  - BreadcrumbList"
echo ""
echo "Services Page:"
echo "  - ItemList (Services)"
echo "  - Service (4 services)"
echo "  - BreadcrumbList"
echo ""
echo "Contact Page:"
echo "  - ContactPage"
echo "  - LocalBusiness"
echo "  - BreadcrumbList"
echo ""

echo -e "${YELLOW}💡 Pro Tip:${NC} Test each page individually for best results!"
echo ""
echo "================================================"
