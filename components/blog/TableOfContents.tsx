'use client';

import { useEffect, useState } from 'react';

interface Heading {
    id: string;
    text: string;
    level: number;
}

export default function TableOfContents({ headings }: { headings: Heading[] }) {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting);
                if (visible.length > 0) {
                    setActiveId(visible[0].target.id);
                }
            },
            { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
        );

        headings.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [headings]);

    const handleClick = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    if (headings.length === 0) return null;

    return (
        <nav className="toc-nav">
            <h4 className="toc-title">Table of Contents</h4>
            <ul className="toc-list">
                {headings.map((h) => (
                    <li
                        key={h.id}
                        className={`toc-item ${h.level === 3 ? 'toc-item-h3' : ''} ${activeId === h.id ? 'toc-item-active' : ''}`}
                    >
                        <a
                            href={`#${h.id}`}
                            onClick={handleClick(h.id)}
                            className="toc-link"
                        >
                            {h.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}