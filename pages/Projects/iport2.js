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
                        <Link href="/iport">  
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
                    <p> Here is a selection of other things I worked on during my summer at IPORT. </p>
                </section>

                <div>
                    <Image src='/images/IportIM/Relayjig.jpg' width={1536} height={2048}/>
                </div>

            </div>
        </div>
    );

} 
