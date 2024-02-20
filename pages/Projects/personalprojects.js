import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/legacy/image';
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
                                    <span className={utilStyles.backarrow}> &lsaquo; </span> Back
                            </Link>
                        </section>
                    </div>
                    
                    <section className={utilStyles.heading2Xl}>
                        <p>Personal projects and design thinking</p>
                    </section>
                
                    <section className={utilStyles.projectpar}>
                        <p> This is a collection of other engineering and design projects, sketches, ideas, and 
                        explorations that represent who I am as a creater, thinker, and person. I hope that something 
                        here can spark a new idea - or maybe just curiosity {': )'} </p>
                    </section>

                    <div className={utilStyles.imdiv}>
                        <Image src='/images/Personalprojects/Lampsketch1.jpg' width={1536} height={2048}/>
                    </div>
                    
                    <div className={utilStyles.pgrid}>
                        <div className={utilStyles.imdiv}>
                            <Image src='/images/Personalprojects/Lampview.jpg' width={1536} height={2048}/>
                        </div>
                        <div className={utilStyles.imdiv}>
                            <Image src='/images/Personalprojects/Lampfront.jpg' width={1536} height={2048}/>
                        </div>
                    </div>

                    <section className={utilStyles.padding}> </section>

                    <section className={utilStyles.projectpar}>
                        <p> <i>A White Noise Machine</i> </p>
                    </section>
                    
                    <div>
                        <Image src='/images/Personalprojects/whitenoise1.jpeg' width={4032} height={3024}/>
                    </div>
                    <section className={utilStyles.padding2}> </section>

                    <div className={utilStyles.pgrid}>

                        <div>
                            <Image src='/images/Personalprojects/whitenoise2.jpeg' width={4032} height={3024}/>
                        </div>

                        <div>
                            <Image src='/images/Personalprojects/whitenoise3.jpeg' width={4032} height={3024}/>
                        </div>

                    </div>

                    <section className={utilStyles.padding}> </section>

                    <section className={utilStyles.projectpar}>
                        <p> <i>A non-electric mechanism that pops in/out at a specific RPM</i> </p>
                    </section>

                    <div>
                        <Image src='/images/Personalprojects/disc2.jpeg' width={4032} height={3024}/>
                    </div>
                    <section className={utilStyles.padding2}> </section>

                    <div className={utilStyles.pgrid}>

                        <div>
                            <Image src='/images/Personalprojects/disc1.jpeg' width={4032} height={3024}/>
                        </div>

                        <div>
                            <Image src='/images/Personalprojects/disc3.jpeg' width={4032} height={3024}/>
                        </div>

                    </div>

                    <section className={utilStyles.padding}> </section>
{/* 
                    <div className={utilStyles.pgrid}>

                        <div className={utilStyles.imdiv}>
                                <Image src='/images/Personalprojects/PencilISO.jpg' width={1536} height={2048}/>
                        </div>
                        <div className={utilStyles.imdiv}>
                                <Image src='/images/Personalprojects/Pencilfront.jpg' width={2048} height={1536}/>
                        </div>

                    </div> */}

                    <section className={utilStyles.projectpar}>
                        <p> <i>Sketches</i> </p>
                    </section>

                    <div>
                            <Image src='/images/Personalprojects/journal.jpeg' width={3024} height={4032}/>
                    </div>

                    <div className={utilStyles.pgrid}>

                        <div>
                            <Image src='/images/Personalprojects/handstand.jpeg' width={3024} height={4032}/>
                        </div>

                        <div>
                            <Image src='/images/Personalprojects/handstand2.jpeg' width={3024} height={4032}/>
                        </div>

                    </div>

                    <div>
                            <Image src='/images/Personalprojects/AUVclip.png' width={2360} height={1640}/>
                    </div>

            </div>
        </div>
    );

}