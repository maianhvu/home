import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from '../components/Container'
import InlineLink from '../components/InlineLink'
import classNames from 'classnames'
import { useState } from 'react'

const TIKTOK_EASTER_EGG_DISPLAY_THRESHOLD = 5

const Home: NextPage = () => {
  const [timesHoveredOverTikTok, setTimesHoveredOverTikTok] = useState(0)
  const onMouseEnterTikTok = () => {
    if (timesHoveredOverTikTok >= TIKTOK_EASTER_EGG_DISPLAY_THRESHOLD) return
    console.log('Mouse entered')

    setTimesHoveredOverTikTok((count) => count + 1)
  }

  return (
    <Container className="pt-6">
      <Head>
        <title>maianhvu - Home</title>
        <meta name="description" content="Mai Anh Vũ. Mobile senior engineer from Singapore." />
      </Head>

      <h1 className="text-2xl font-mono mb-4 text-black dark:text-white">Hi 👋 my name is Vũ.</h1>

      <p className="font-mono">📍 I&apos;m a Software Engineer based in Singapore 🇸🇬.</p>
      <p className="font-mono">
        💼 I&apos;m currently working as a Senior Mobile Engineer for{' '}
        <InlineLink
          href="https://padlet.com/"
          className="hover:border-b-padlet-pink text-padlet-pink">
          Padlet
        </InlineLink>
        .
      </p>

      <p className="font-mono mt-6">
        In my free time, I&apos;m helping junior engineers reach their full potential and find a
        great place to work. If this is right down your alley, drop me an email at{' '}
        <InlineLink
          href="mailto:me@maianhvu.com"
          className="hover:border-b-orange-500 text-orange-500">
          me@maianhvu.com
        </InlineLink>
        !
      </p>

      <p className="font-mono mt-6">
        I write essays on topics related to Engineering, Mobile Development, Custom Ergonomic
        Keyboards, and Language Learning. Read them at{' '}
        <InlineLink
          href="https://blog.maianhvu.com/"
          className="hover:border-b-purple-500 text-purple-500">
          my blog
        </InlineLink>{' '}
        .
      </p>

      <p className="font-mono mt-6">Find me on my socials:</p>
      <ul className="font-mono">
        <li>
          <InlineLink
            href="https://www.linkedin.com/in/anhvumai/"
            className="hover:border-b-blue-500 text-blue-500">
            Linked<span className="text-gray-800 dark:text-gray-400">in</span>
          </InlineLink>
        </li>
        <li>
          <InlineLink href="#" className="hover:border-b-blue-500 text-blue-500">
            Twitter 🚧
          </InlineLink>
        </li>
        <li onMouseEnter={onMouseEnterTikTok}>
          <InlineLink
            href="#"
            className={classNames(
              'hover:border-b-black text-black hover:dark:border-b-white dark:text-white',
              styles.tiktok
            )}>
            TikTok 🚧
            {timesHoveredOverTikTok >= TIKTOK_EASTER_EGG_DISPLAY_THRESHOLD && (
              <span className="text-gray-500"> (neat stuff right? I know 😉)</span>
            )}
          </InlineLink>
        </li>
      </ul>

      <footer className="my-8 font-mono text-sm">
        Made in like an hour using Next.js and hosted on Vercel.
        <br />
        Copyright &copy; {new Date().getFullYear()}. Tbh I didn&apos;t spend that much time writing
        this stuff.
      </footer>
    </Container>
  )
}

export default Home
