import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from '../components/Container'
import InlineLink from '../components/InlineLink'
import classNames from 'classnames'
import { useMemo, useState } from 'react'
import { DateTime } from 'luxon'
import Link from 'next/link'

const BIRTHDAY = DateTime.fromObject({ day: 3, month: 12, year: 1994 })
const TIKTOK_EASTER_EGG_DISPLAY_THRESHOLD = 5

const Home: NextPage = () => {
  const [timesHoveredOverTikTok, setTimesHoveredOverTikTok] = useState(0)
  const onMouseEnterTikTok = () => {
    if (timesHoveredOverTikTok >= TIKTOK_EASTER_EGG_DISPLAY_THRESHOLD) return

    setTimesHoveredOverTikTok((count) => count + 1)
  }
  const age = useMemo(() => Math.floor(DateTime.now().diff(BIRTHDAY, 'years').years), [])

  return (
    <Container className="pt-6">
      <Head>
        <title>maianhvu - Home</title>
        <meta name="description" content="Mai Anh Vũ. Mobile senior engineer from Singapore." />
      </Head>

      <h1 className="text-2xl mb-4 text-black dark:text-white">Hi 👋 my name is Vũ.</h1>

      <p>📍 I&apos;m a {age}-year old Software Engineer based in Singapore 🇸🇬.</p>
      <p>
        💼 I&apos;m currently working as a Senior Mobile Engineer for{' '}
        <InlineLink
          href="https://padlet.com/"
          className="hover:border-b-padlet-pink text-padlet-pink">
          Padlet
        </InlineLink>
        .
      </p>

      <p className="mt-6">
        On the side, I&apos;m helping junior engineers in South East Asia land their dream jobs,
        especially in Singapore and in the US. If you&apos;re interested, drop me an email at{' '}
        <InlineLink
          href="mailto:me@maianhvu.com"
          className="hover:border-b-orange-500 text-orange-500">
          me@maianhvu.com
        </InlineLink>
        !
      </p>

      <p className="mt-6">I write about</p>
      <ul className="list-disc">
        <li>Software Engineering (particularly Mobile Development)</li>
        <li>Custom Ergonomic Keyboards</li>
        <li>Language Learning</li>
      </ul>
      <p>
        Read them at{' '}
        <InlineLink
          href="https://blog.maianhvu.com/"
          className="hover:border-b-purple-500 text-purple-500">
          my blog
        </InlineLink>
        . (only available in Vietnamese 🇻🇳 for now, sorry!)
      </p>

      <p className="mt-6">Find me on social platforms:</p>
      <ul className="list-disc">
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
              <span className="text-gray-500">
                {' '}
                (I had wayy too much time on my hand sometimes&hellip;)
              </span>
            )}
          </InlineLink>
        </li>
      </ul>

      <footer className="my-8 text-xs text-gray-300 dark:text-gray-700">
        Quickly mashed together in an afternoon with <Link href="https://nextjs.org/">Next.js</Link>{' '}
        and <Link href="https://vercel.com/">Vercel</Link>.
        <br />
        Copyright &copy; {new Date().getFullYear()}. Not that anyone would plagiarise this stuff
        anyway?
      </footer>
    </Container>
  )
}

export default Home
