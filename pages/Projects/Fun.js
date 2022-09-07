import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../../styles/utils.module.css';

export default function fun() {
    return(
        <div className={utilStyles.mainproj}>
            <Head>
                <title>Easter Egg</title>
            </Head>
            <div>
                    <section className={utilStyles.backsign}>
                    <Link href="/">
                        <a className={utilStyles.menu}> <span className={utilStyles.backarrow}> &lsaquo; </span> Back</a>
                    </Link>
                    </section>
                    
                    <section className={utilStyles.heading2Xl}>
                        <p>My favorite youtube video right now:</p>
                    </section>
                
                    <section className={utilStyles.projectpar}>
                        <p>
                        If you have time, this is worth a listen. 
                        </p>
                    </section>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/cEqgeN27Hhk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
        </div>
    );
    
} 