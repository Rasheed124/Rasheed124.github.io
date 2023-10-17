import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL("https://rasheeddev.me"),
  title: {
    default: "Rasheed Tolulope",
    template: `%s - Rasheed Tolulope`,
  },
  description: "Am a Full stack Developer",
  verification: {
    //   google: "google-site-verification=878787878",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}</body>
    </html>
  )
}
