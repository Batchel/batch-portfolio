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
                <div className={utilStyles.menu}>
                    <section className={utilStyles.backsign}>
                        <Link href="/"> 
                            <a>
                                <span className={utilStyles.backarrow}> &lsaquo; </span> Back
                            </a> 
                        </Link>
                    </section>
                </div>

                <div className={utilStyles.aboutgrid}>  

                    <div>
                        <section className={utilStyles.heading2Xl}>
                            <p>Hey there! </p>
                        </section>
                    
                        <section className={utilStyles.projectpar}>
                            <p> Thanks for visiting my website. </p> 

                            <p> Along with engineering and design, I spend my time writing songs on the guitar,
                                struggling up a rock climbing wall, and collecting stickers.</p> 
                        
                            <div>
                                <a className={utilStyles.menu} href={"https://xd.adobe.com/view/89ce28ac-74bf-42c8-93f0-0429cae789df-dc9d/"} target="_blank">
                                    + A UX/UI prototype for an Adobe Creative Jam Challenge
                                </a>
                            </div>

                            <div>
                                <a className={utilStyles.menu} href={"https://open.spotify.com/track/0TcIjFIa2MNUhbTV2WYMzJ?si=fd99e119d0b44c4d"} target="_blank">
                                    + A song I wrote with my sister
                                </a>
                            </div>

                            <div>
                                <a className={utilStyles.menu} href={"https://drive.google.com/file/d/1MYPlcOkZ0Yqiocrgqeg97gWZ2SSHLtZk/view"} target="_blank">
                                    + An architecture portfolio
                                </a>
                            </div>
                        </section>
                    </div>

                    <div>

                        <div className={utilStyles.gridim}>
                            <div className={utilStyles.img1}>
                                <Image src='/images/about/Chess.jpg' width={1024} height={1545}/>
                            </div>
                        </div>

                        <div className={utilStyles.gridim}>
                            <div className={utilStyles.img1}>
                                <Image src='/images/about/satchel.png' width={1024} height={1545}/>
                            </div>
                        </div>

                        <div className={utilStyles.gridim}>
                            <div className={utilStyles.img1}>
                                <Image src='/images/about/light.jpeg' width={4032} height={3024}/>
                            </div>
                        </div>

                        <div className={utilStyles.gridim}>
                            <div className={utilStyles.img1}>
                                <Image src='/images/about/skate.jpg' width={1536} height={2317}/>
                            </div>
                        </div>

                    </div>


                </div>    
            </div>
        </div>
    );
    
} 
