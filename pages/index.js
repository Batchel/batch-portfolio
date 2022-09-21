import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image'
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
              <p>I&rsquo;m Satchel. I&rsquo;m a Mechanical Engineer with a passion for industrial design and sustainability.</p>
            </section>

            <section className={utilStyles.headingMd}>
              <p>
                I&rsquo;m a former design engineering intern for {' '}
                <a className={utilStyles.menu} href={"https://www.iportproducts.com/"} target="_blank" rel="noreferrer">  IPORT </a> 
                {' '}and current mechanical lead at {' '}
                <a className={utilStyles.menu} href={"https://www.linkedin.com/company/yonderdeep/"} target="_blank" rel="noreferrer">  Yonder Deep</a>
                . I&rsquo;m also a 4th year mechanical engineering major at UCSD specializing in controls + robotics.
              </p>
            </section>

            <section className={utilStyles.headingLg}>
              <p> Learn more about:</p>
            </section>

            <section className={utilStyles.headingMd}>

              <div className={utilStyles.menu}>
                <Link href="/Projects/iport"><a>+ Designing enterprise solutions for Apple products</a></Link>
              </div>

              <div className={utilStyles.menu}>
                <Link href="/Projects/yonderdeep">
                  + Leading a team in developing a 3D printed AUV for climate change
                </Link>
              </div>

              <div className={utilStyles.menu}>
                <Link href="/Projects/personalprojects">
                  + The way I design and how I think
                </Link>
              </div>

              <div className={utilStyles.menu}>
                <Link href="/Projects/Fun">
                  + Click here too!
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



