import "./globals.css"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: "400"
})

export const metadata: Metadata = {
  title: "Grupo Tesseract",
  description: "Site Grupo Tesseract"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
