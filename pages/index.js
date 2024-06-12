import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/legacy/image'
import "@fontsource/source-sans-pro";
import "@fontsource/crimson-text";



export default function Home() {
  return (
    // <Layout home>
    <div className={utilStyles.main}>
      <Head>
        <title>Satchel Birch Portfolio</title>
        <meta name="description" content="hi" />
        <link rel="icon" href="/images/Cube.svg" />
      </Head>

      <div>
        <div className={utilStyles.grid}>
          <div>
            {/* <Image src='/images/dotpath.svg' width={100} height={450}/> */}
          </div>

          <div className={utilStyles.card}>
            <section className={utilStyles.heading2Xl}>
              <p>I&rsquo;m Satchel. A mechanical engineer with a passion for design and sustainability.</p>
            </section>

            <section className={utilStyles.headingMd}>
              <p>
                I&rsquo;m currently an Avionics Mechanical Engineer at {' '}
                <a className={utilStyles.menu} href={"https://www.relativityspace.com/"} target="_blank" rel="noreferrer">  <b>Relativity Space</b>, </a>
                a former design engineering intern for {' '}
                <a className={utilStyles.menu} href={"https://www.iportproducts.com/"} target="_blank" rel="noreferrer">  <b>IPORT</b>, </a> 
                {' '}and former project director at {' '}
                <a className={utilStyles.menu} href={"https://yonderdeep.ucsd.edu/index.html"} target="_blank" rel="noreferrer">  <b>Yonder Deep</b></a>
                . Graduate from UC San Diego with a BS in Mechanical Engineering with specialization in controls and robotics.
              </p>
            </section>

            <section className={utilStyles.headingLg}>
              <p> Learn more about:</p>
            </section>

            <section className={utilStyles.headingMd}>

              <div className={utilStyles.menu}>
                <Link href="/Projects/iport">
                  + Designing enterprise solutions for Apple products</Link>
              </div>

              <div className={utilStyles.menu}>
                <Link href="/Projects/yonderdeep">
                  + Developing a 3D printed AUV for climate change
                </Link>
              </div>

              <div className={utilStyles.menu}>
                <Link href="/Projects/mask">
                  + Proving a novel respiratory mask concept
                </Link>
              </div>

              <div className={utilStyles.menu}>
                <Link href="/Projects/arctic">
                  + Research trip to the Arctic Circle
                </Link>
              </div>

              <div className={utilStyles.menu}>
                <Link href="/Projects/personalprojects">
                  + How I design & How I think
                </Link>
              </div>

              <div className={utilStyles.menu}>
                <Link href="/Projects/Fun">
                  + Click here... maybe?
                </Link>
              </div>

            </section>
          </div>
        </div>
      </div>
    </div>
    // </Layout>
  );
}

// const Cursor = () => {
//   return <div className="cursor"/>
// }



