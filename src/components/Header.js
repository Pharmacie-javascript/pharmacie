import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div className="header-top">
                <div className="container">
                    <div className="header-top__inner">
                        <h1 className="header-top__logo">
                            <Link href="/">
                                <a>Pharmacie</a>
                            </Link>
                        </h1>
                        <div className="header-top__right">
                            {/* Translator Plugin */}
                            <div className="translator-plugin">Translator Plugin</div>
                            {/* Login Menu */}
                            <div className="login-menu">Login Menu</div>
                            {/* Shopping Cart */}
                            <div className="shopping-cart">Shopping Cart</div>
                            {/* Search Area */}
                            <div className="search-area">Search Area</div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="main-nav">
                <div className="container">
                    <ul className="main-nav__list">
                        <li className="main-nav__item">
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li className="main-nav__item main-nav__dropdown">
                            <a>About Us</a>
                            <ul className="main-nav__sublist">
                                <li className="main-nav__subitem">
                                    <Link href="/about">
                                        <a>About</a>
                                    </Link>
                                </li>
                                <li className="main-nav__subitem">
                                    <Link href="/patient-services">
                                        <a>Patient Services</a>
                                    </Link>
                                </li>
                                <li className="main-nav__subitem">
                                    <Link href="/news-resources">
                                        <a>News &amp; Resources</a>
                                    </Link>
                                </li>
                                <li className="main-nav__subitem">
                                    <Link href="/faq">
                                        <a>FAQ</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="main-nav__item">
                            <Link href="/prescriptions">
                                <a>Prescriptions</a>
                            </Link>
                        </li>
                        <li className="main-nav__item">
                            <Link href="/insurance-companies">
                                <a>Insurance Companies</a>
                            </Link>
                        </li>
                        <li className="main-nav__item main-nav__dropdown">
                            <a>Products</a>
                            <ul className="main-nav__sublist">
                                <li className="main-nav__subitem">
                                    <Link href="/covid-19">
                                        <a>COVID-19</a>
                                    </Link>
                                </li>
                                <li className="main-nav__subitem">
                                    <Link href="/babies">
                                        <a>Babies</a>
                                    </Link>
                                </li>
                                <li className="main-nav__subitem">
                                    <Link href="/cosmetics">
                                        <a>Cosmetics</a>
                                    </Link>
                                </li>
                                <li className="main-nav__subitem">
                                    <Link href="/health">
                                        <a>Health</a>
                                    </Link>
                                </li>
                                <li className="main-nav__subitem">
                                    <Link href="/hygiene">
                                        <a>Hygiene</a>
                                    </Link>
                                </li>
                                <li className="main-nav__subitem">
                                    <Link href="/optics">
                                        <a>Optics</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="main-nav__item">
                            <Link href="/contact">
                                <a>Contact Us</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
export default Header;
