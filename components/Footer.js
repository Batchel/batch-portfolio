import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className={styles.navbar}>
                <a href="mailto:birch.satchel@gmail.com" >
                    <span>
                        <Image src='/../images/paperplane.svg' alt="Home" width={200} height={50} />
                    </span>
                </a>

                <a href={'https://www.linkedin.com/in/satchel-birch/'} target="_blank" rel="noreferrer">
                    <span>
                        <Image src='/../images/linkedin.svg' alt="Home" width={200} height={50} />
                    </span>
                </a>

                <a href={'https://www.instagram.com/satchriffs/?hl=en'} target="_blank" rel="noreferrer">
                    <span>
                        <Image src='/../images/instagram.svg' alt="Home" width={200} height={50} />
                    </span>
                </a>
        </footer>
    )
}

export default Footer;