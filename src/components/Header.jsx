import Logo from '/images/logo.png';
import ForeverIcon from '/images/forever.png';

const Header = ({ toggleSidebar }) => {
    return (
        <header className="sticky top-0 bg-white shadow-md py-4 px-6 text-black z-10">
            {/* Mobile Header */}
            <div className="flex justify-between items-center md:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
                <img
                    src={Logo}
                    alt="Logo"
                    loading='lazy'
                    className="h-8 w-auto"
                    width={98}
                    height={26}
                />
                <img
                    src={ForeverIcon}
                    alt="Profile Icon"
                    className="h-[34px] w-[34px] rounded-full"
                />
            </div>

            {/* Desktop Header */}
            <div className='hidden md:flex items-center'>
                <div className='flex justify-between items-center w-52'>
                    <img
                        src={Logo}
                        alt="Logo"
                        loading='lazy'
                        className="h-8 w-auto"
                        width={130}
                        height={35}
                    />
                    <svg
                        onClick={toggleSidebar}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18H18M6 12H18M6 6H18M4 12H6M4 12H6M4 12H6"
                        />
                    </svg>
                </div>

                <div className='flex flex-grow items-center ml-16'>
                    <nav className="uppercase space-x-8">
                        <a href="#" className="hover:text-gray-700">Dashboard</a>
                        <a href="#" className="hover:text-gray-700">Packages</a>
                        <a href="#" className="hover:text-gray-700">Events</a>
                        <a href="#" className="hover:text-gray-700">Blogs</a>
                    </nav>
                </div>
                <div className="rounded-full h-12 w-12 flex items-center justify-center ml-auto">
                    <img
                        src={ForeverIcon}
                        alt="Rounded Icon"
                        className="h-[34px] w-[34px] rounded-full"
                    />
                </div>
            </div>
        </header>

    );
};

export default Header;
