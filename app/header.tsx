'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { Magnetic } from '@/components/ui/magnetic'

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
            <Magnetic>
                <Link
                    href="#join"
                    className="rounded-full bg-black px-4 py-2 text-sm text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                >
                    Join the Club
                </Link>
            </Magnetic>
        </header>
    )
}
