import { Inter, Dancing_Script, Oxygen, Black_Han_Sans, Cutive , Poppins } from 'next/font/google'

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

export const oxygen = Oxygen({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '700']
})

export const dancing_script = Dancing_Script({
    subsets: ['latin'],
    display: 'swap',
})

export const black_han_sans = Black_Han_Sans({
    weight : ['400'],
    subsets: ['latin'],
})

export const cutive = Cutive({
    weight : ['400'],
    subsets: ['latin'],
})

export const poppins = Poppins({
    weight : ['400','500','600','700'],
    subsets: ['latin'],
})