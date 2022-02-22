import Link from 'next/link'


const NavBar = () => {
    return (
        <ul>
            <li>
                <Link href='/about'>
                    About
                </Link>
            </li>
            <li>
                <Link href='/skills'>
                    Skills
                </Link>
            </li>
            <li>
                <Link href='/porfolio'>
                    Projects
                </Link>
            </li>
            <li>
                <Link href='/blog'>
                    Blog
                </Link>
            </li>
            <li>
                <Link href='/contact'>
                  Contact
                </Link>
            </li>
            <li id="Instagram">
            </li>
            <li id="Github">
            </li>
            <li id="LinkedIn"></li>
        </ul>
    )
}

export default NavBar