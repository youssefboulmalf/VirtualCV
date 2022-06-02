import React from 'react'
import Head from 'next/head'
import { Element } from 'react-scroll'
import Header from '../src/Components/Header/Header'
import Page from '../src/Components/Page/Page'
import ProjectSection from '../src/Components/ProjectsSection/ProjectsSection'
import TopBar from '../src/Components/TopBar/TopBar'
import css from '../styles/Home.module.css'
import SkillsSection from '../src/Components/SkillsSection/SkillsSection'
import AboutSection from '../src/Components/AboutSection/AboutSection'
import ContactSection from '../src/Components/ContactSection/ContactSection'
import Footer from '../src/Components/Footer/Foorter'



export default function Home() {

  return (
    <div className={css.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:title" content="Virtual Portfolio" />
        <meta property="og:description" content="A virtual portfolio by Youssef Boulmalf"/>
        <meta name="virtual porfolio" content="virtual porfolio by Youssef Boulmaf" />
        <meta name="viewport" content="width=device-width, minimum-scale=1"></meta>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-75EDL53ZS4"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-75EDL53ZS4');
        `,
          }}
        />
      </Head>
      <div className={css.main}>
        <TopBar />
        <Page>
          <Header />
          <Element id="projects"><ProjectSection /></Element>
          <Element id="about"><AboutSection /></Element>
          <Element id="skills"><SkillsSection /></Element>
          <Element id="Contact"><ContactSection /></Element>
        </Page>
        <Footer />
      </div>
    </div>
  )
}
