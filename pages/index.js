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
import Footer from '../src/Components/Footer/Foorter'

export default function Home() {

  return (
    <div className={css.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap" rel="stylesheet" />
        <meta name="virtual porfolio" content="virtual porfolio by Youssef Boulmaf" />
        <meta name="viewport" content="width=device-width, minimum-scale=1"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={css.main}>
        <TopBar/>
        <Page>
          <Header/>
          <Element id="projects"><ProjectSection/></Element>
          <Element id="about"><AboutSection/></Element>
          <Element id="skills"><SkillsSection/></Element>
        </Page>
        <Footer/>
      </div>
    </div>
  )
}
