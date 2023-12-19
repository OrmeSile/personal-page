import {Inter} from 'next/font/google'
import './globals.css'
import {Metadata} from "next";
import {
  FallbackStyles, StyleInjector,
} from "@/components/theme/StyleInjector";
import {StoreProvider} from "@/stores/StoreProvider";


// const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {}
export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
    <head title={"Vivien L'Helguen"}>
      <FallbackStyles/>
    </head>
    <body>
    <StyleInjector/>
    <StoreProvider>
      {children}
    </StoreProvider>
    </body>
    </html>
  )
}
