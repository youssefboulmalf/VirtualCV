import Head from 'next/head'
import Image from 'next/image'
import Header from '../src/Components/Header/Header'
import Page from '../src/Components/Page/Page'
import ProjectSection from '../src/Components/ProjectsSection/ProjectsSection'
import TopBar from '../src/Components/TopBar/TopBar'
import css from '../styles/Home.module.css'
import img from '../src/img/djammin.jpg'
import SkillsSection from '../src/Components/SkillsSection/SkillsSection'
import Skill from '../src/Skill/Skill'

export default function Home() {


  return (
    <div className={css.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap" rel="stylesheet" />
        <meta name="virtual curriculum vitae" content="virtual curriculum vitae by Youssef Boulmaf" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={css.main}>
        <TopBar />
        <Page>
          <Header />
          <ProjectSection />
          <SkillsSection>
            <Skill
              skillName={"Javascrtipt"}
              skillLevel={80}
            />
            <Skill
              skillName={"SQL"}
              skillLevel={35}
            />
            <Skill
              skillName={"Adgile workflow"}
              skillLevel={75}
            />
            <Skill
              skillName={"NodeJs"}
              skillLevel={65}
            />
            <Skill
              skillName={"Redux"}
              skillLevel={55}
            />
            <Skill
              skillName={"React"}
              skillLevel={70}
            />
            <Skill
              skillName={"Python"}
              skillLevel={40}
            />
            <Skill
              skillName={"HTML"}
              skillLevel={80}
            />
            <Skill
              skillName={"CSS"}
              skillLevel={65}
            />
          </SkillsSection>

        </Page>
      </div>
    </div>
  )
}
