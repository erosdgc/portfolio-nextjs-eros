import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contact from '../components/Contact/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Eros David | Front-End Developer</title>
        <meta name="description" content="Hi! I'm Eros. A front-end web developer. Feel free to check my website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
