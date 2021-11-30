export default function GenericFooter({ children }) {
    return (
        <footer className={`bg-gray-500 p-6`}>
            <div className={`max-w-6xl mx-auto px-4`}>
                <p className={`text-white text-sm mt-48 mb-4`}>Copyright © 2021 | All rights reserved</p>
            </div>
        </footer>
    )
}