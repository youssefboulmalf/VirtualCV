import Head from 'next/head'
import Image from 'next/image'
import Header from '../src/Components/Header/Header'
import Page from '../src/Components/Page/Page'
import TopBar from '../src/Components/TopBar/TopBar'
import css from '../styles/Home.module.css'

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
          <Header/>
        </Page>
      </div>
    </div>
  )
}
