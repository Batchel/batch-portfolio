import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import "@fontsource/source-sans-pro";
import "@fontsource/crimson-text";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href='/'>
                <a>
                    <span>
                        <Image src='/../images/IportIM/softcube.svg' alt="Home" width={300} height={70} />
                    </span>
                </a>
            </Link>
            <ul className={styles.navmenu}>
                <li className={styles.navitem}>
                    <Link href="/">
                        <a className={styles.navlink}>About</a>
                    </Link>
                </li>
                <li className={styles.navitem}>
                    <a href={'https://drive.google.com/file/d/1m-XAPTppRWbQLl60Igs8-shrN5Nim6Jx/view?usp=sharing'} target="_blank" >
                        <a className={styles.navlink}>Resume</a>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;