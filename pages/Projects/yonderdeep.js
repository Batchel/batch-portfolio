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
                <div className={utilStyles.menu}>
                    <section className={utilStyles.backsign}>
                        <Link href="/">  
                            <a>
                                <span className={utilStyles.backarrow}> &lsaquo; </span> Back
                            </a>
                        </Link>
                    </section>
                </div>
                    
                <div>
                    <section className={utilStyles.heading2Xl}>
                        <p>Yonder Deep: Leading a team in developing a 3D printed AUV for climate change</p>
                    </section>
                
                    <section className={utilStyles.projectpar}>
                        <p> Yonder Deep is an undergraduate engineering organization at UC San Diego working to develop a 
                        3D printed autonomous underwater vehicle for accessible oceanographic research and climate 
                        change research. </p>

                        <p> The team's current mission is to deploy in Svalbard, Norway in Summer 2025, and take audio readings
                        of a glacier terminus to listen for small air bubbles trapped in the ice *popping*. We hope that this
                        will give us insight into the rate at which the glacier is melting. </p>

                        <p>
                        <b>History:</b>
                        </p>

                        <p>
                        October 2020: Mechanical Team Member, Analysis
                        </p>

                        <p>
                        September 2021: Mechanical Analysis Sub-Lead
                        </p>

                        <p>
                        January 2022: Mechanical Team Lead
                        </p>

                        <p>
                        September 2022: Project Director
                        </p>

                        <p>
                        <Link href="/Projects/arctic">
                            <a className={utilStyles.menu}> 
                            <i>+ June 2023: I traveled to the arctic on a research expedition as part of this campaign.</i>
                            </a>
                        </Link>
                        </p>

                        <p>
                        Now: Advisor
                        </p>

                    </section>
                    
                    <div>
                        <Image src='/images/yonderdeep/SurfAUV.JPG' width={6960} height={4640}/>
                    </div>

                    <section className={utilStyles.projectpar}>

                    </section>


                    <div className={utilStyles.pgrid}>

                        <div className={utilStyles.griddiv}>
                            <section className={utilStyles.projectpar}>
                            <p>
                                This is a picture of a few of us on the team - <i>Daniel Ju - Previous YD director, Kusal Uprety - Mechanical Lead, and I</i> - carrying down our autonomous underwater vehicle down the retractable stairs of SIO pier off the coast of La Jolla Shores. After 5.5 years of
                                inception, development, leadership change, and lots of hardwork - this would be the first time our system made it to the ocean. 
                            </p>

                            <p>
                                After becoming mechanical lead the year before this, and working really hard to adapt to my new position of overseeing a design, manufacturing, and analysis team, I was uncertain, to say the least, about my capabilities of directing 20 people.
                                Not only in the realm of mechanical engineering, but in electrical and software.
                            </p>
                            </section>
                        </div>

                        <div>
                            <Image src='/images/yonderdeep/stairs.jpeg' width={3024} height={4032}/>
                        </div>

                    </div>

                    <section className={utilStyles.projectpar}>

                    </section>

                    <section className={utilStyles.projectpar}>

                    </section>

                    <div className={utilStyles.pgrid}>
                        <div className={utilStyles.griddiv}>
                            <section className={utilStyles.projectpar}>

                            <p>
                                At the same time, I knew I was motivated, and I still felt like the right person to do the job, regardless of how much I knew.
                            </p>

                            <p>
                                I jumped into the deep end, pun intended, and not only learned so much more about every other discipline of engineering alongside my mechanical knowledge - but also about interdisciplinary work and collaboration. I began to understand as our team
                                worked through fall quarter, that our technical knowledge and capabilities were actually going to come second. And I mean - what was most important, was instilling a belief as a team that what we were trying was achievable. 
                            </p>
                            </section>
                        </div>

                        <div>
                        <Image src='/images/yonderdeep/pier.jpeg' width={3024} height={4032}/>
                        </div>
                             
                    </div>

                    <section className={utilStyles.projectpar}>

                    </section>

                    <div>
                            <section className={utilStyles.projectpar}>
                            <p>
                                There were lots of late nights working in our lab space, broken solder joints, and snapped 3D prints - which could be pretty demoralizing given that some of our parts would take more than a day to reprint. Additionally, we didnt have the pressure of
                                a competition or nearby deadlines. You would think this made things easier, but I would argue that it made it even tougher to stay motivated. We were the only people pushing ourselves to meet our own deadlines, and often failing.
                            </p>

                            <section className={utilStyles.projectpar}>

                            </section>

                            <div>
                                <Image src='/images/yonderdeep/ocean.JPG' width={6960} height={4640}/>
                            </div>

                            <p>
                                This is why cultivating a team dynamic that believed in the cause and impact of our work was so important to me. Completing our organizations first ever successful ocean test proved to me how important it is to believe in the process for the sake of learning.
                                For the sake of a challenge.
                            </p>

                            <p>
                                And definitely for the sake of a team.
                            </p>

                            </section>
                        </div>


                    <div>
                            <Image src='/images/yonderdeep/W23yonderteam.jpg' width={6000} height={4000}/>
                    </div>

                    <section className={utilStyles.projectpar}>
                            <p>
                                If you want to stay up to date on what Yonder Deep is up to, check out our {''}
                                <a className={utilStyles.menu} href={"https://www.iportproducts.com/retail"} target="_blank" rel="noreferrer">
                                <i>Website</i>
                                </a>
                                {''} and {''}
                                <a className={utilStyles.menu} href={"https://www.iportproducts.com/retail"} target="_blank" rel="noreferrer">
                                <i>Linked-In!</i>
                                </a>  
                            </p>

                    </section>

                </div>

            </div>
        </div>
    );
    
} 
