import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../../styles/utils.module.css';

export default function personalprojects() {
    return(
        <div className={utilStyles.mainproj}>
            <Head>
                <title>Personal projects and design thinking</title>
            </Head>

            <div>
                    <div className={utilStyles.menu}>
                        <section className={utilStyles.backsign}>
                            <Link href="/">  
                                <a>
                                    <span className={utilStyles.backarrow}> &lsaquo; </span> Back
                                </a>
                            </Link>
                        </section>
                    </div>
                    
                    <section className={utilStyles.heading2Xl}>
                        <p>Personal projects and design thinking</p>
                    </section>
                
                    <section className={utilStyles.projectpar}>
                        <p> This is a collection of other engineering and design projects, sketches, ideas, and 
                        explorations that represent who I am as a creater, thinker, and person. I hope that something 
                        here can spark a new idea - or maybe just joy. </p>
                    </section>

                    <div className={utilStyles.imdiv}>
                        <Image src='/images/Personalprojects/Lampsketch1.jpg' width={1536} height={2048}/>
                    </div>
                    
                    <div className={utilStyles.pgrid}>
                        <div className={utilStyles.imdiv}>
                            <Image src='/images/Personalprojects/Lampview.jpg' width={1536} height={2048}/>
                        </div>
                        <div>
                            <Image src='/images/Personalprojects/Lampfront.jpg' width={1536} height={2048}/>
                        </div>
                    </div>

                    <section className={utilStyles.padding}> </section>

                    <div className={utilStyles.pgrid}>

                        <div>
                                <Image src='/images/Personalprojects/PencilISO.jpg' width={1536} height={2048}/>
                        </div>
                        <div>
                                <Image src='/images/Personalprojects/Pencilfront.jpg' width={2048} height={1536}/>
                        </div>

                    </div>

                    <section className={utilStyles.padding}>

                    </section>

                    <div>
                            <Image src='/images/Personalprojects/AUVclip.png' width={2360} height={1640}/>
                    </div>


                    <section className={utilStyles.padding}>

                    </section>
                    
                    <div>
                            <Image src='/images/Personalprojects/Building.png' width={3200} height={2178}/>
                    </div>

            </div>
        </div>
    );

}