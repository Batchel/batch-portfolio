import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';

export default function About() {
    return(
        <div className={utilStyles.mainproj}>
            <Head>
                <title>About</title>
            </Head>
            <div>
                    <section className={utilStyles.backsign}>
                    <Link href="/">
                        <a className={utilStyles.menu}> <span className={utilStyles.backarrow}> &lsaquo; </span> Back</a>
                    </Link>
                    </section>
                    
                    <section className={utilStyles.heading2Xl}>
                        <p>About me</p>
                    </section>
                
                    <section className={utilStyles.projectpar}>
                        <p>
                        Hey there!
                        </p> 
                    </section>

                    <div>
                        <Image src='/images/IportIM/Relayjig.jpg' width={1536} height={2048}/>
                    </div>

                    <div>
                        <Image src='/images/IportIM/Relayjig.jpg' width={1536} height={2048}/>
                    </div>

            </div>
        </div>
    );
    
} 
