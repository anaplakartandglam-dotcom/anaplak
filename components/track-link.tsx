"use client"

import { pushEvent } from "@/lib/gtm"
import type { AnchorHTMLAttributes, ReactNode } from "react"

interface TrackLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  kind: string
  children: ReactNode
}

export default function TrackLink({ kind, onClick, children, ...props }: TrackLinkProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        pushEvent(kind)
        onClick?.(e)
      }}
    >
      {children}
    </a>
  )
}