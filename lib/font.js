import { Inter, Urbanist } from 'next/font/google'

export const urbanist = Urbanist({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--urbanist",
    display: 'swap',
})

export const inter = Inter({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--inter",
    display: 'swap',
})
