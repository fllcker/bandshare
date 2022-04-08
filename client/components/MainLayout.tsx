import Header from "./Header";

export default function MainLayout({ children }: any) {
    return (
        <>
            <Header/>
            <main>{children}</main>
        </>
    )
}