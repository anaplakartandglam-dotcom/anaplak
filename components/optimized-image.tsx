'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { ImageProps } from 'next/image'

interface OptimizedImageProps extends Omit<ImageProps, 'src' | 'alt'> {
    src: string
    alt: string
    priority?: boolean
    quality?: number
}

export default function OptimizedImage({
    src,
    alt,
    priority = false,
    quality = 85,
    className = '',
    ...props
}: OptimizedImageProps) {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <Image
                src={src}
                alt={alt}
                priority={priority}
                quality={quality}
                loading={priority ? undefined : 'lazy'}
                onLoad={() => setIsLoading(false)}
                className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-sm' : 'scale-100 blur-0'}
          ${className}
        `}
                {...props}
            />
        </div>
    )
}
