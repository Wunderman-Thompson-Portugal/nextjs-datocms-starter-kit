import GenericHeader from "@/components/Templates/Main/Header"
import GenericFooter from "@/components/Templates/Main/Footer"

export default function MainLayout({ children }) {

    return (
        <>
            <GenericHeader>{children}</GenericHeader>
            <main className={`max-w-6xl mx-auto px-4`}>{children}</main>
            <GenericFooter>{children}</GenericFooter>
        </>
    )
}