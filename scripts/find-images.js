#!/usr/bin/env node

/**
 * Image Optimization Helper Script
 * This script helps identify all img tags that need to be converted to Next.js Image components
 */

const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '..', 'components');

function findImgTags(dir) {
    const results = [];

    function scanDirectory(directory) {
        const files = fs.readdirSync(directory);

        files.forEach(file => {
            const filePath = path.join(directory, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
                scanDirectory(filePath);
            } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
                const content = fs.readFileSync(filePath, 'utf8');
                const imgMatches = content.match(/<img[^>]*>/g);

                if (imgMatches && imgMatches.length > 0) {
                    results.push({
                        file: path.relative(process.cwd(), filePath),
                        count: imgMatches.length,
                        tags: imgMatches
                    });
                }
            }
        });
    }

    scanDirectory(dir);
    return results;
}

console.log('🔍 Scanning for <img> tags that need optimization...\n');

const imgTags = findImgTags(componentsDir);

if (imgTags.length === 0) {
    console.log('✅ No <img> tags found! All images are optimized.');
} else {
    console.log(`Found ${imgTags.length} files with <img> tags:\n`);

    imgTags.forEach(({ file, count, tags }) => {
        console.log(`📄 ${file} (${count} images)`);
        tags.forEach((tag, index) => {
            console.log(`   ${index + 1}. ${tag.substring(0, 80)}${tag.length > 80 ? '...' : ''}`);
        });
        console.log('');
    });

    console.log('\n📝 To optimize these images:');
    console.log('1. Import Next.js Image: import Image from "next/image"');
    console.log('2. Replace <img> with <Image>');
    console.log('3. Add width/height or use fill prop');
    console.log('4. Add quality and loading props');
    console.log('\nSee PERFORMANCE_OPTIMIZATION.md for detailed instructions.');
}
