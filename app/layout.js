import "app/favicon.ico"
import "@/node_modules/react-modal-video/css/modal-video.css"
import Aos_Animation from "@/components/elements/AosAnimation"
import "public/assets/css/bootstrap.css"
import "public/assets/css/aos.css"
import "public/assets/css/style.css"
import "public/assets/css/responsive.css"
import 'swiper/css'
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { urbanist, inter } from '@/lib/font'

export const metadata = {
    title: 'Task Me',
    description: 'Task Me is a task management app that helps you organize and prioritize your tasks efficiently.',
    icons: {
        icon: [
            { url: '/Task-me.png', sizes: '32x32', type: 'image/png' },
            { url: '/Task-me.png', sizes: '16x16', type: 'image/png' },
        ],
        shortcut: '/Task-me.png',
        apple: '/Task-me.png',
        other: [
            { rel: 'icon', url: '/Task-me.png' },
        ],
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${urbanist.variable} ${inter.variable}`}>
            <head>
                <link rel="icon" href="/Task-me.png" type="image/png" />
                <link rel="shortcut icon" href="/Task-me.png" type="image/png" />
                <link rel="apple-touch-icon" href="/Task-me.png" />
            </head>
            <body>
                <Aos_Animation/>
                {children}
            </body>
        </html>
    )
}
