'use client'

import { Button } from './button'
import { Magnetic } from './magnetic'
import { type VariantProps } from "class-variance-authority"
import { buttonVariants } from './button'
import { cn } from '@/lib/utils'

interface MagneticButtonProps extends React.ComponentProps<typeof Button> {
    intensity?: number
    range?: number
    springOptions?: any
    actionArea?: 'self' | 'parent' | 'global'
}

export function MagneticButton({
    children,
    className,
    intensity = 0.3,
    range = 100,
    springOptions = { bounce: 0 },
    actionArea = 'self',
    ...props
}: MagneticButtonProps) {
    return (
        <Magnetic
            intensity={intensity}
            range={range}
            springOptions={springOptions}
            actionArea={actionArea}
        >
            <Button
                variant="magnetic"
                className={className}
                {...props}
            >
                {children}
            </Button>
        </Magnetic>
    )
} 