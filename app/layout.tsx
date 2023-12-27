import './globals.css'
import {Metadata} from "next";
import {
  FallbackStyles, StyleInjector,
} from "@/components/theme/StyleInjector";
import {StoreProvider} from "@/stores/StoreProvider";
import {Josefin_Sans} from "next/font/google";

const josefinSans = Josefin_Sans({subsets: ['latin']})
export const metadata: Metadata = {}
export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
    <head>
      <title>{"Vivien L'Helguen - Orme"}</title>
      <FallbackStyles/>
    </head>
    <body className={josefinSans.className}>
    <StyleInjector/>
    <StoreProvider>
      {children}
    </StoreProvider>
    </body>
    </html>
  )
}
