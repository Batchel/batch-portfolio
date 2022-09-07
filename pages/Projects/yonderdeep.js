import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../../styles/utils.module.css';

export default function iport() {
    return(
        <div className={utilStyles.mainproj}>
            <Head>
                <title>Leading a team in developing a 3D printed AUV for climate change</title>
            </Head>
            <div>
                    <section className={utilStyles.projectpar}>
                    <Link href="/">
                        <a className={utilStyles.menu}> Back</a>
                    </Link>
                    </section>
                    
                    <section className={utilStyles.heading2Xl}>
                        <p>Yonder Deep: Leading a team in developing a 3D printed AUV for climate change</p>
                    </section>
                
                    <section className={utilStyles.projectpar}>
                        <p>
                        Yonder Deep is an undergrad engineering organization at UCSD working to develop a 
                        3D printed autonomous underwater vehicle for accessible oceanographic research and climate 
                        change research. 
                        </p>
                    </section>

                    <div>
                        <Image src='/images/IportIM/Relayjig.jpg' width={1536} height={2048}/>
                    </div>

            </div>
        </div>
    );
    
} 
