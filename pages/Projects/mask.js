import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/legacy/image';
import utilStyles from '../../styles/utils.module.css';

export default function mask() {
    return(
        <div className={utilStyles.mainproj}>
            <Head>
                <title>A Novel Respiratory Mask Prototype</title>
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
                        <p>A Novel Respiratory Mask Designed with Vacuum Suction to Eliminate Infected Aerosols </p>
                    </section>

                    <section className={utilStyles.projectpar}>
                        <p> This was my senior project at UCSD, working in a group of four with Dr. Jeremy Orr, a Pulmonary and Critical Care Physician at UC San Diego Health. </p>
                        <p>
                                <a className={utilStyles.menu} href={"https://sites.google.com/eng.ucsd.edu/mae-156b-team15-spring-2023/multimedia/testing?authuser=0"} target="_blank" rel="noreferrer">
                                        <i>+ Project Website</i>
                                </a>
                        </p>

                        <div className={utilStyles.imdiv2}>
                        <Image 
                            src='/images/Mask/Mask3crop.jpg' 
                            width={1309} height={808}
                        />
                        </div>
                
                        <p> Leaks are a common problem with respiratory masks used for non-invasive ventilation in hospitals. This problem is both a loss of oxygen delivered to the patient, and an increased risk of
                            infected aerosols spreading from beneath the mask seal. Around the onset of Covid-19, Dr. Orr came up with an idea for a vacuum assisted mask that would in theory evacuate any infected droplets
                            that escaped from beneath the initial skin / mask barrier, and also improve oxygen deliverance to the patient. </p>

                        <p> Over 15 weeks, our team&lsaquo;s job was to take Dr. Orr&lsaquo;s initial low-fidelity prototype and redesign a fully functioning proof of concept from the ground up in order for Dr. Orr to adequately showcase
                            his idea to potential stakeholders.
                        </p>
                    </section>

                    <div>
                        <Image src='/images/Mask/MaskSide.JPG' width={1600} height={1200}/>
                    </div>

                    <div>
                        <Image src='/images/Mask/boxtest.jpg' width={4032} height={3024}/>
                    </div>

                    <section className={utilStyles.headingXl}>
                    <p>My Role</p>
                    </section>

                    <section className={utilStyles.projectpar}>
                        <p> Due to the nature of this product and industry, this project revolved a lot around ergonomics, materials, and organic modeling. My team worked together on every aspect of the project, 
                            but we each took specialties within the design, and mine was the design and modeling of the silicone vacuum channel. </p>

                        <p> There were a lot of key factors to consider for the design and performance of this channel, but here are a few:
                        </p>
                    </section>

                    <div className={utilStyles.pgrid}>
                    <section className={utilStyles.projectpar}>
                        <p> - Variability in facial features and size </p>
                        <p> - Balancing stiffness of silicone material </p>
                        <p> - Feasibility of prototyping a pourable mold </p>
                        <p> - Comfort on face </p>
                    </section>
                    <section className={utilStyles.projectpar}>
                        <p> - Modeling a unique contoured channel </p>
                        <p> - Creating a realistic test bed </p>
                        <p> - Operating pressure range </p>
                        <p> - Impact of facial and patient movement </p>
                    </section>
                    </div>

                    <div>
                        <Image src='/images/Mask/diagram.png' width={6400} height={4800}/>
                    </div>

                    <section className={utilStyles.projectpar}>
                    <p> One of the main difficulties with this project was the impact that very small contours could have on each prototype. A vacuum seal only works if the seal can adequately compress against the opposing material surface, conforming to fill all gaps
                        where air could escape through. Thus, it is easier to achieve this with a more flexible material, like a low shore hardness silicon. However, a too flexible material used for this mask would completely collapse the channel structure. A higher shore
                        hardness material would solve this issue, but then the channel is less likely to conform to the patients face unless under a higher vacuum source pressure which proves a problem for comfortability and duration of wearing.
                    </p>

                    <p> A second main difficulty was testing our prototypes effectively and efficiently. The only way to truly evaluate each design to the complexity of the scenario was to physically mold each silicon channel design and resin print each new mask design. This led us 
                        to spend a lot of time also optimizing and testing molds using 3D FDM printing on home and workshop printers.
                    </p>

                    <div>
                        <Image src='/images/Mask/mold.JPG' width={3024} height={4032}/>
                    </div>

                    <p> We also spent <i>a lot</i>  of time getting our pour <i>just</i> right...
                    </p>

                    <div>
                        <Image src='/images/Mask/fail.JPG' width={3024} height={4032}/>
                    </div>

                    <p> And I spent lots of time getting <i>just</i> the right curvature profile...
                    </p>

                    <p> This shows the change between two prototypes that finally caused the vacuum seal to hold (Orange to Green). 
                    </p>

                    <div>
                        <Image src='/images/Mask/overlap2.png' width={1280} height={546}/>
                    </div>

                    <div>
                        <Image src='/images/Mask/overlap1.png' width={1280} height={383}/>
                    </div>

                    <p> Ultimately, we were able to make a final proof of concept prototype that was effective testing in a lab with an actual hospital wall vacuum source and test subject - me. 
                    </p>

                    <div>
                        <Image src='/images/Mask/labtest.jpg' width={3000} height={4000}/>
                    </div>


                    <p> See the full project website and Dr. Orr&lsaquo;s mask website below!
                    </p>

                    <p>
                                <Link className={utilStyles.menu} href={"https://sites.google.com/eng.ucsd.edu/mae-156b-team15-spring-2023/multimedia/testing?authuser=0"} target="_blank" rel="noreferrer">
                                        <i>+ Project Website</i>
                                </Link>
                    </p>
                    <p>
                                <Link className={utilStyles.menu} href={"https://www.mask-interface.com/home"} target="_blank" rel="noreferrer">
                                        <i>+ Dr. Jeremy Orr&lsaquo;s Website</i>
                                </Link>
                    </p>
                    </section>



                </div>
            </div>
        </div>
    );
} 