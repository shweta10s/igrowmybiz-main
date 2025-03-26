import './globals.css'
import type { Metadata } from 'next'
import FacebookPixel from '@/components/FacebookPixel'
import { inter } from './fonts'
import { Toaster } from '@/components/ui/toaster'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';


export const metadata: Metadata = {
  title: 'Igrow My Biz: website development company in Bhopal - services offered are web designing, web development, software development, digital marketing & more',
  description: 'Website development company in Bhopal, India - services offered are web designing, web development software development, digital marketing, social media marketing, google ads, seo, ppc and more.',
  keywords: ["Digital Marketing Agency In Bhopal", "Website Development Company Bhopal", "Digital Marketing In India", "Digital Marketing Services Bhopal", "Digital Marketing Company In Bhopal", "Best Digital Marketing Company In Bhopal", "Top Digital Marketing Companies In Bhopal", "Website Design In Bhopal, Web Development In Bhopal", "Web Development Bhopal Advance Digital Marketing", "Top Digital Marketing Services in Bhopal", "Top 10 Best Digital Marketing Agencies in Bhopal", "Best Digital Marketing Company in Bhopal", "Top 10 Digital Marketing Agencies in Bhopal", "Best Digital Marketing Agencies in Bhopal", "No.1 Digital Marketing Company in Bhopal", "SEO Company in Bhopal", "Top 6 SEO Companies in Bhopal", "Best SEO Company in Bhopal", "Top 5 Best SEO Companies in Bhopal", "SEO Services Providers in Bhopal", "Web Design Company in Bhopal", "Web Development Company in Bhopal", "Website designing Company in Bhopal", "Top 5 Best Website Designing Companies in Bhopal", "Best web development company in Bhopal", "Website Design Development Bhopal"],
  verification:{
    google: "VtBhfbTtYH6Oba9HZbeKDNnmS-sb5CU1lic09wJlOBM"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
        <FacebookPixel />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
