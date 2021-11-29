import Header from "@/components/Templates/Main/Header"
import Footer from "@/components/Templates/Main/Footer"
import GenericHeader from "@/components/Templates/Main/Header"
import GenericFooter from "@/components/Templates/Main/Footer"

export default function MainLayout({ children }) {

    return (
        <>
            <GenericHeader>{children}</GenericHeader>
            <main>{children}</main>
            <GenericFooter>{children}</GenericFooter>
        </>
    )
}