import { Heart, ShoppingCart } from "lucide-react";

function Header({ cartCount = 0, likeCount = 0 }) {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-6 py-4 flex items-center justify-between">
            <a href="#" className="flex justify-around space-x-2">
                <img
                    src="https://www.bmw.co.id/content/dam/bmw/common/images/logo-icons/BMW/BMW_Grey-Colour_RGB.SVG.asset.1697707041685.SVG"
                    alt="Logo"
                    className="h-12 w-auto object-contain"
                />
            </a>

            <nav className="flex-1 flex justify-center space-x-6 text-sm md:text-base font-medium text-gray-700">
                <a href="#" className="hover:text-red-600 transition-colors">
                    WANITA
                </a>
                <a href="#" className="hover:text-red-600 transition-colors">
                    PRIA
                </a>
                <a href="#" className="hover:text-red-600 transition-colors">
                    ANAK
                </a>
                <a href="#" className="hover:text-red-600 transition-colors">
                    BAYI
                </a>
            </nav>

            <div className="flex items-center space-x-4 relative">
                {/* Heart with count */}
                <div className="relative">
                    <a href="#">
                        <Heart className="h-5 w-5 hover:text-red-600" />
                    </a>
                    {likeCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                            {likeCount}
                        </span>
                    )}
                </div>

                {/* Cart with count */}
                <div className="relative">
                    <a href="#">
                        <ShoppingCart className="h-5 w-5 hover:text-red-600" />
                    </a>
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                            {cartCount}
                        </span>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
