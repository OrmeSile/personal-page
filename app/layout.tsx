import './globals.css'
import {Metadata} from "next";
import {
  FallbackStyles, StyleInjector,
} from "@/components/theme/StyleInjector";
import {StoreProvider} from "@/stores/StoreProvider";
import {Josefin_Sans} from "next/font/google";

const josefinSans = Josefin_Sans({subsets: ['latin']})
export const metadata: Metadata = {
  description: "Recherche un contrat de professionnalisation en développement (web) dans la région Nantaise pour continuer mes études."
}
export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
    <head>
      <title>{"orme - Vivien L'Helguen"}</title>
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
