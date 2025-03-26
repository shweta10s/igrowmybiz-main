import { Toaster } from '@/components/ui/toaster'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <Toaster />
        </>
    )
}
