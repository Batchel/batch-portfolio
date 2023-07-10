import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../../styles/utils.module.css';

export default function iport2() {
    return(
        <div className={utilStyles.mainproj}>
            <Head>
                <title>Designing enterprise solutions for Apple products</title>
            </Head>

            <div>

                <div className={utilStyles.menu}>
                    <section className={utilStyles.backsign}>
                        <Link href="/Projects/iport">  
                            <a>
                                <span className={utilStyles.backarrow}> &lsaquo; </span> Back
                            </a>
                        </Link>
                    </section>
                </div>
                
                <section className={utilStyles.heading2Xl}>
                    <p>IPORT: Side Projects.</p>
                </section>

                <section className={utilStyles.projectpar}>
                    <p> An Arduino controlled relay device to manually turn on/off each of the 8 pins on a lightning connector
                        with different time delays:</p>
                    <div>
                        <Image src='/images/IportIM/Relayjig.jpg' width={1536} height={2048}/>
                    </div>

                </section>

                
            </div>
        </div>
    );

} 
