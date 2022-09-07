import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../../styles/utils.module.css';

export default function iport() {
    return(
        <div className={utilStyles.mainproj}>
            <Head>
                <title>Designing enterprise solutions for Apple products</title>
            </Head>
            <div>
                    <section className={utilStyles.projectpar}>
                    <Link href="/Projects/iport">
                        <a className={utilStyles.menu}> Back</a>
                    </Link>
                    </section>
                    
                    <section className={utilStyles.heading2Xl}>
                        <p>IPORT: Side Projects.</p>
                    </section>
                
                    <section className={utilStyles.projectpar}>
                        <p>
                        Here is a selection of other things I worked on during my summer at IPORT. 
                        </p>
                    </section>

                    <div>
                        <Image src='/images/IportIM/Relayjig.jpg' width={1536} height={2048}/>
                    </div>

            </div>
        </div>
    );
    
} 
