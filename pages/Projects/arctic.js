import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/legacy/image';
import utilStyles from '../../styles/utils.module.css';

export default function arctic() {
    return(
        <div className={utilStyles.mainproj}>
            <Head>
                <title>A Research Trip to the Arctic Cirlce</title>
            </Head>

            <div>
                <div className={utilStyles.menu}>
                    <section className={utilStyles.backsign}>
                        <Link href="/">  
                                <span className={utilStyles.backarrow}> &lsaquo; </span> Back
                        </Link>
                    </section>
                </div>
                    
                <div>
                    <section className={utilStyles.heading2Xl}>
                        <p>Traveling to the Polish Polar Station in Southern Svalbard with Scripps Institute of Oceanography. </p>
                    </section>
                
                    <section className={utilStyles.projectpar}>
                        <p> At the end of my senior year of college, I was invited on a research trip to the arctic circle to help
                            with climate change research using active and passive acoustic monitoring of glaciers, icebergs, and water columns.
                       </p>

                        <p> The expedition was led by <b>Dr. Grant Deane</b>, an oceanographer from SIO and the advisor of Yonder Deep,
                            the organization I directed at the time. </p>
                    </section>

                    <div>
                        <Image src='/images/Arctic/DSC_1779.jpg' width={1504} height={1000}/>
                    </div>

                    <div>
                        <Image src='/images/Arctic/DSC_1562.jpg' width={1504} height={1000}/>
                    </div>

                    <section className={utilStyles.headingXl}>
                        <p> Research Goal </p>
                    </section>

                    <section className={utilStyles.projectpar}>
                        <p>
                        This expedition was a part of a multi-year research campaign to listen to the underwater noises of glaciers 
                        and glacier ice in order to uncover data useful in understanding the rate of glacier melting. This can be
                        achieved with hydrophones (robust underwater microphones) that can take recordings at depth when deployed in front
                        of a glacier terminus. Additionally, there was other research being conducted on this trip by <b>Dr. Elizabeth Reed-Weidner</b>
                        and PhD student at the time, <b>Hayden Johnson</b>, looking into the effects of noise scattering in water columns in Fjords, and
                        boundary layer ice-water interaction on icebergs respectively.
                        
                        </p>

                        <p> 
                        Throughout my 3 week deployment, I helped with logistics and set-up of research equipment like CTDs and hydrophone arrays - and went on many
                        all-day hikes to the nearby Hornsund Glacier, sometimes with a <i>very expensive</i>, 45-LB laser scanner strapped to my back. I journaled and took 
                        many many photos while I was there, but below are some of the highlights I think best show the experience.
                        </p>

                        <p>
                        <i>Disclaimer: All of the guns we carried, me included, were for polar bear protection - to be used as an absolute last resort. We
                        were required to be certified and trained, as well as carry a flare gun and radio at all times when out on an expedition.</i>
                        </p>
                    </section>

                    <div>
                        <Image src='/images/Arctic/DSC_1501.jpg' width={1504} height={1000}/>
                    </div>

                    <div>
                        <Image src='/images/Arctic/DSC_1516.jpg' width={1504} height={1000}/>
                    </div>

                    <div>
                        <Image src='/images/Arctic/DSC_1558.jpg' width={4413} height={2758}/>
                    </div>

                    <div>
                        <Image src='/images/Arctic/DSC_1466.jpg' width={1504} height={1000}/>
                    </div>

                    <section className={utilStyles.projectpar}>
                        <p>
                        The last few days of the deployment were spent on a research vessel, <i>The Ulla Rinman</i>.
                        Sleeping on the boat, we traveled to nearby glaciers in the local Fjord Structure.
                        </p>
                    </section>

                    <div>
                        <Image src='/images/Arctic/DSC_1632.jpg' width={1504} height={1000}/>
                    </div>

                    <div>
                        <Image src='/images/Arctic/DSC_1744.jpg' width={1504} height={1000}/>
                    </div>

                    <div>
                        <Image src='/images/Arctic/DSC_1769.jpg' width={1504} height={1000}/>
                    </div>

                    <section className={utilStyles.projectpar}>
                        <p>
                        I could not have not gone on this trip not only without the support of all of the researchers at SIO, but also everyone of my
                        friends and colleagues at Yonder Deep that I had the opportunity to work with, lead, and learn from.
                        </p>
                    </section>

                    <section className={utilStyles.projectpar}>
                    <p>
                        Continue the journey here:
                    </p>
                    <div>
                            <a className={utilStyles.menu} href={"https://imtlab.ucsd.edu/"} target="_blank" rel="noreferrer">
                                <i>+ Innovative Marine Technology Lab at Scripps Institute of Oceanography</i>
                            </a>
                    </div>
                    <div>
                    <a className={utilStyles.menu} href={"https://yonderdeep.ucsd.edu/"} target="_blank" rel="noreferrer">
                                <i>+ Yonder Deep and our goal of developing a 3D printed, low cost AUV</i>
                    </a>
                    </div>
                    </section>


                </div>

            </div>
        </div>
    );
    
} 
