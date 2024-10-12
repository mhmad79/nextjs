import Link from "next/link";

const NavBar: React.FC = () => {
    return (
        <nav className="bg-gray-800  relative z-10">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">

                    <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start md:justify-between">
                        <div className="flex flex-shrink-0 items-center">
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"                                
                                 alt="Your Company"
                            />
                        </div>
                        <div className="sm:ml-6 sm:block ">
                            <div className="flex space-x-4 z-10 ">
                                <Link href="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">
                                    Home
                                </Link>
                                <Link href="/about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                    About
                                </Link>
                                <Link href="/blog" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                    Blog
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default NavBar;