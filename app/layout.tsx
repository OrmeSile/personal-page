import {Inter} from 'next/font/google'
import './globals.css'
import {Metadata} from "next";
import {
  FallbackStyles, StyleInjector,
  StyleProvider
} from "@/components/theme/StyleInjector";
import Script from "next/script";
import dynamic from "next/dynamic";


const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {}
export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
    <head>
      <FallbackStyles/>
    </head>
    <body>
    <StyleInjector/>
    <StyleProvider>
      {children}
    </StyleProvider>
    </body>
    </html>
  )
}
