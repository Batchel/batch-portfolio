import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className={styles.navbar}>
                <a href={'https://drive.google.com/file/d/1m-XAPTppRWbQLl60Igs8-shrN5Nim6Jx/view?usp=sharing'} target="_blank">
                    <span>
                        <Image src='/../images/paperplane.svg' alt="Home" width={200} height={50} />
                    </span>
                </a>

                <a href={'https://www.linkedin.com/in/satchel-birch/'} target="_blank">
                    <span>
                        <Image src='/../images/linkedin.svg' alt="Home" width={200} height={50} />
                    </span>
                </a>

                <a href={'https://www.instagram.com/satchriffs/?hl=en'} target="_blank">
                    <span>
                        <Image src='/../images/instagram.svg' alt="Home" width={200} height={50} />
                    </span>
                </a>
        </footer>
    )
}

export default Footer;