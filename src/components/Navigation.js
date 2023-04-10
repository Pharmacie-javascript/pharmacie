import Link from "next/link";

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li className="navigation__item">
                    <Link href="/about">
                        <a>About Us</a>
                    </Link>
                </li>
                <li className="navigation__item">
                    <Link href="/prescriptions">
                        <a>Prescriptions</a>
                    </Link>
                </li>
                <li className="navigation__item">
                    <Link href="/insurance-companies">
                        <a>Insurance Companies</a>
                    </Link>
                </li>
                <li className="navigation__item">
                    <Link href="/products">
                        <a>Products</a>
                    </Link>
                </li>
                <li className="navigation__item">
                    <Link href="/contact">
                        <a>Contact Us</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
