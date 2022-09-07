import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../../styles/utils.module.css';

export default function yonderdeep() {
    return(
        <div className={utilStyles.mainproj}>
            <Head>
                <title>Leading a team in developing a 3D printed AUV for climate change</title>
            </Head>
            <div>
                    <section className={utilStyles.backsign}>
                    <Link href="/">
                        <a className={utilStyles.menu}> <span className={utilStyles.backarrow}> &lsaquo; </span> Back</a>
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

                        <p> 
                        Our current mission is to deploy in Svalbard, Norway in Summer 2023, and take audio readings
                        of a glacier terminus to listen for small air bubbles trapped in the ice *popping*. We hope that this
                        will give us insight into the rate at which the glacier is melting.
                        </p>
                    </section>

                    <div>
                        <Image src='/images/yonderdeep/AUVISO.jpeg' width={1617} height={728}/>
                    </div>

                    <div>
                        <Image src='/images/yonderdeep/AUV2.png' width={1617} height={728}/>
                    </div>

                    <section className={utilStyles.headingXl}>
                        <p>My Role</p>
                    </section>

                    <section className={utilStyles.projectpar}>
                        <p>
                        I joined Yonder Deep in <u>October 2020 </u> as a member of the Mechanical Analysis team. We 
                        were responsible for conducting predictive analysis on our AUV CAD and doing relavent research
                        pertaining to the mission. In  <u>October 2021 </u> I became the Mechanical Analysis Lead for that team,
                        and focused on leading a small team of 4 in doing 3D print materials research and buoyancy analysis. Later,
                        at the beginning of <u> January 2022</u> I became the Mechanical Team Lead, overseeing our two other
                        subteams: <u> Design </u> and <u>Manufacturing </u>
                        </p>

                        <p> 
                        Here are some photos from our most recent pool test!
                        </p>
                    </section>

                    <div>
                        <Image src='/images/yonderdeep/Subleads.jpg' width={4032} height={3024}/>
                    </div>

                    <div>
                        <Image src='/images/yonderdeep/dogwalk.jpg' width={4032} height={3024}/>
                    </div>

                    <div>
                        <Image src='/images/yonderdeep/teamphoto.jpg' width={4032} height={3024}/>
                    </div>

                    <div>
                        <Image src='/images/yonderdeep/Pool.jpg' width={4032} height={3024}/>
                    </div>
            </div>
        </div>
    );
    
} 
