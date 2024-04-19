import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import "@fontsource/source-sans-pro";
import "@fontsource/crimson-text";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href='/'>
                
                    <span>
                        <Image src='/../images/IportIM/softcube.svg' alt="Home" width={300} height={70} />
                    </span>
                
            </Link>
            <ul className={styles.navmenu}>
                <li className={styles.navitem}>
                    <Link href="/About" className={styles.navlink}>About
                    </Link>
                </li>

                <li className={styles.navitem}>
                    <a href={'https://drive.google.com/file/d/15zV8FjlKkdUq8xBG-Vv0X3cDzXO8X4pP/view?usp=sharing'} target="_blank" rel="noreferrer">
                        <p className={styles.navlink}>Resume</p>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;