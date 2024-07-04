import '../styles/globals.css'
import type { Metadata } from 'next'

import { fonts } from '../fonts/fonts';

export const metadata: Metadata = {
  metadataBase: new URL("https://rasheedtolulope.vercel.app"),
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
    <html lang="en" >
      <body className={`${fonts.inter} ${fonts.montserrat} ${fonts.libre_baskerville}`}>
        {children}</body>
    </html>
  )
}
