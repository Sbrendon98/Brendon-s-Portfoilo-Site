import Link from 'next/link'

const TWstyling = "text-blue-500 hover: text-blue-800 text-center"
const TWlist = 'mr-6'

const NavBar = () => {
    return (
        <ul className='flex content-center'>
            <li className={TWlist}>
                <Link href='/about'>
                    <a className={TWstyling}>About</a>
                </Link>
            </li>
            <li className={TWlist}>
                <Link href='/skills'>
                    <a className={TWstyling}>Skills</a>
                </Link>
            </li>
            <li className={TWlist}>
                <Link href='/porfolio'>
                    <a className={TWstyling}>Porfolio</a>
                </Link>
            </li>
            <li className={TWlist}>
                <Link href='/blog'>
                    <a className={TWstyling}>Blog</a>
                </Link>
            </li>
            <li className={TWlist}>
                <Link href='/contact'>
                  <a className={TWstyling}>Contact Me</a>
                </Link>
            </li>
            <li className={TWlist}>
            </li>
            <li className={TWlist}>
            </li>
            <li className={TWlist}></li>
        </ul>
    )
}

export default NavBar