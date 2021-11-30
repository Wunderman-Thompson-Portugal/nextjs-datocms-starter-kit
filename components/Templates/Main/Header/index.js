import Head from "next/head";

export default function GenericHeader({ children }) {
    return (
        <nav>
            <div className={`max-w-6xl mx-auto px-4`}>
                <div className={`flex justify-between`}>

                    <div className={`flex space-x-4`}>

                        {/* LOGO */}
                        <div>
                            <a href="#" className={`flex items-center py-5 px-2 text-gray-700 hover:text-gray-900`}>
                                <svg className={`h-6 w-6 mr-1 text-blue-400`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinejoin="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                <span className={`font-bold`}>Wunderman Thompson Portugal</span>
                            </a>
                        </div>

                        {/* PRIMARY NAV */}
                        <div className={`hidden md:flex items-center space-x-1`}>
                            <a href="#" className={`py-5 px-3 text-gray-700 hover:text-gray-900`}>Features</a>
                            <a href="#" className={`py-5 px-3 text-gray-700 hover:text-gray-900`}>Pricing</a>
                        </div>
                    </div>

                    {/* mobile button goes here */}
                    <div className={`md:hidden flex items-center`}>
                        <button className={`mobile-menu-button`}>
                            <svg className={`w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinejoin="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>


            {/* Add JS to open and close mobile menu https://github.com/Wunderman-Thompson-Portugal/html-starter-kit/blob/main/public/js/app.js */}
            <div className={`mobile-menu hidden md:hidden`}>
                <a href="#" className={`block py-2 px-4 text-sm hover:bg-gray-200`}>Features</a>
                <a href="#" className={`block py-2 px-4 text-sm hover:bg-gray-200`}>Pricing</a>
                <a href="#" className={`block py-2 px-4 text-sm hover:bg-gray-200`}>Login</a>
                <a href="#" className={`block py-2 px-4 text-sm hover:bg-gray-200`}>Signup</a>
            </div>
        </nav>
    )
}