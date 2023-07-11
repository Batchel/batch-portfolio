import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../../styles/utils.module.css';
import "@fontsource/source-sans-pro";
import "@fontsource/crimson-text";


export default function iport() {
    return(

    <div>
        <div className={utilStyles.mainproj}>
            <Head>
                <title>Designing enterprise solutions for Apple products</title>
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
                    <p>IPORT: Designing enterprise solutions for Apple products.</p>
                </section>
            
                <section className={utilStyles.projectpar}>
                    <p> This is a hand strap and stand that I worked on developing at IPORT 
                    that attaches to the back of the IPORT iPad case. It aims to help the
                    user utilize the iPad in different angles and environments as comfortably 
                    as possible. </p>
                </section>

                <section className={utilStyles.projectpar}>
                        <Link href="/Projects/iport2">
                            <a className={utilStyles.menu}> 
                                + If you want to see other small side projects I did while at IPORT, <b>click here!</b> 
                            </a>
                        </Link>
                </section>

                <div>
                    <Image src='/images/IportIM/Ipadflathandcrop.jpg' width={2048} height={922}/>
                </div>
                
                <section className={utilStyles.projectpar}>
                    <p > There were two main issues to solve for this project: </p>

                    <section className={utilStyles.tab}>
                        <p> 1. How to make the stand comfortable and usable </p>

                        <p> 2. How to attach the stand to the Iport case </p>
                    </section>
                </section>


                <section className={utilStyles.headingXl}>
                    <p>Brainstorming</p>
                </section>

                <section className={utilStyles.projectpar}>
                    <p> I started by exploring all of the ways to interact with an iPad and stand, 
                    how each category could impact the user experience. For example: What are the
                    distinct functions of a handstrap and stand? How many ways can and iPad be picked up and set down?
                    What surfaces will the iPad be used on? What parts of the stand matter most? </p>
                </section>

                <div>
                    <Image src='/images/IportIM/Brainstorm.jpeg'
                    width = {2618}
                    height = {2024}
                    />
                </div>

                    
                <div>
                    <Image src='/images/IportIM/iPadProfile1.jpeg'
                    width = {2017}
                    height = {1559}
                    />
                </div>

                <div>
                    <Image src='/images/IportIM/handcurve.jpeg'
                    width = {2748}
                    height = {2124}
                    />
                </div>


                <section className={utilStyles.padding}>

                </section>

                <section className={utilStyles.headingXl}>
                    <p>Prototyping</p>
                </section>

                <section className={utilStyles.projectpar}>
                    <p> I worked closely with our industrial designer at IPORT to evaluate different forms, making 
                    big and small changes to the design through multiple models and discussions. The six
                    prototypes we made were a combination of his work and mine, evolving through ergonomics, 
                    functionality, and aesthetics. </p>
                </section>

                <div>
                    <Image src='/images/IportIM/SidebySide.jpg'
                    width = {2048}
                    height = {1280}
                    />
                </div>



                <div>
                    <Image src='/images/IportIM/IpadStandup.jpg'
                    width = {2048}
                    height = {1536}
                    />
                </div>

                <div>
                    <Image src='/images/IportIM/IpadHandup.jpg'
                    width = {2048}
                    height = {1536}
                    />
                </div>

                <section className={utilStyles.padding}>

                </section>

                <section className={utilStyles.headingXl}>
                    <p>Locking Mechanism</p>
                </section>

                <section className={utilStyles.projectpar}>
                    <p> There are existing locking holes on the IPORT iPad case for other products, which 
                    was the method we chose to lock the stand to the case. The important choice to be made was how
                    the user installed the stand and interacted with the locking mechanism. So I prototyped a sample &quot;auto-locking&quot;
                    mechanism that could provide a tactile feel for a spring loaded lock, and also prototyped another option which
                    required a tool.</p>
                </section>

                <div>
                    <Image src='/images/IportIM/Isolock.jpg'
                    width = {2048}
                    height = {1536}
                    />
                </div>

                <div>
                    <Image src='/images/IportIM/frontlock.jpg'
                    width = {2048}
                    height = {1536}
                    />
                </div>

                <div>
                    <Image src='/images/IportIM/Sidelock.jpg'
                    width = {2048}
                    height = {1536}
                    />
                </div>

                <div>
                    <Image src='/images/IportIM/Handscrew.jpg'
                    width = {2048}
                    height = {1536}
                    />
                </div>

                <section className={utilStyles.projectpar}>
                    <p> I am super grateful to have worked with the IPORT engineering team on this product and 
                        I&apos;m excited to see where they go next. </p>
                </section>

                <section className={utilStyles.projectpar}>
                    <div>
                            <a className={utilStyles.menu} href={"https://www.iportproducts.com/retail"} target="_blank" rel="noreferrer">
                                + See IPORT Retail products including the handstand and more!
                            </a>
                    </div>
                </section>

                {/*<section className={utilStyles.padding}>

    </section>*/}

               {/*} <section className={utilStyles.headingXl}>
                    <p>Alternate Design</p>
                </section>

                <section className={utilStyles.projectpar}>
                    <p> After developing a few designs within the project parameters, I also decided to explore
                    an alternate option for fun.
                    </p>
                </section>

                <div>
                    <Image src='/images/IportIM/L-Handstrap 1.3 (Closed).jpg'
                    width = {2048}
                    height = {1536}
                    />
                </div>

                <div>
                    <Image src='/images/IportIM/L-Handstrap 1.3 - Edit.png'
                    width = {2048}
                    height = {1536}
                    />
                </div>

                <div>
                    <Image src='/images/IportIM/LstandIpad.jpg'
                    width = {2048}
                    height = {1536}
                    />
                </div>*/}

            </div>
        </div>
        
        {/*}
        <div className={utilStyles.gradmargin}>
            <Image src = '/images/IportIM/grad2.png' width = {2650} height = {1500} />
            <section className={utilStyles.headingip}>
                    <p>This product is still under development, but please send me an e-mail if you are interested and want to know more!</p>
            </section>
        </div> */}

    </div>
    );
    
} 
