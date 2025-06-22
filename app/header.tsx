'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { MagneticButton } from '@/components/ui/magnetic-button'

export function Header() {
    return (
        <header className="mb-8 flex items-center justify-between">
            <div>
                <Link href="/" className="font-medium text-black dark:text-white">
                    Northwestern AI Club
                </Link>
                <TextEffect
                    as="p"
                    preset="fade"
                    per="char"
                    className="text-zinc-600 dark:text-zinc-500"
                    delay={0.5}
                >
                    Hands-On AI for Every Wildcat
                </TextEffect>
            </div>
            <MagneticButton asChild>
                <Link href="#join">
                    Join the Club
                </Link>
            </MagneticButton>
        </header>
    )
}
