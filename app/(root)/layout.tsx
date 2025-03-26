import Footer from "./components/footer"
import NavBar from "./components/navbar"
import StickyIcons from "./components/sticky-icons"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <NavBar />
            <StickyIcons />
            {children}
            <Footer />
        </>
    )
}
