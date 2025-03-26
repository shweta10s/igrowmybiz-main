import BlogFooter from "./components/blog-footer"



export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <BlogFooter />
        </>
    )
}