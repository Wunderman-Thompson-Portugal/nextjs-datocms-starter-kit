import { useRouter } from "next/router";

export default function GenericFooter({ children }) {
    const { route } = useRouter();

    if (route === '/')
        return <></>;

    return (
        <footer className={`bg-gray-100`}>
            <div className={`max-w-6xl mx-auto px-4`}>
                Footer
            </div>
        </footer>
    )
}