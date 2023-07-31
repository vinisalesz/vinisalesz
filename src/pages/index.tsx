import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

import avatarImg from '../images/avatar.png'
import { FiLinkedin, FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi'

import styles from '../styles/Home.module.scss'

const Background = dynamic(() => import('../components/Background'), {
  ssr: false,
})

export default function Home() {
  return (
    <div className={styles.container}>
      <NextSeo
        title='Vinícius Sales'
      />

      <main className={styles.main}>
        <div className={styles.avatar}>
          <Image
            alt="Vinícius Avatar Photo"
            height={132}
            src={avatarImg}
            width={132}
          />
        </div>

        <Link legacyBehavior href="https://www.linkedin.com/">
          <a className={styles.button} rel="noreferrer" target="_blank">
            <i>
              <FiLinkedin />
            </i>
            LinkedIn
          </a>
        </Link>

        <Link legacyBehavior href="https://github.com/vinisalesz">
          <a className={styles.button} rel="noreferrer" target="_blank">
            <i>
              <FiGithub />
            </i>
            GitHub
          </a>
        </Link>

        <Link legacyBehavior href="https://instagram.com/">
          <a className={styles.button} rel="noreferrer" target="_blank">
            <i>
              <FiInstagram />
            </i>
            Instagram
          </a>
        </Link>

        <Link legacyBehavior href="https://twitter.com/">
          <a className={styles.button} rel="noreferrer" target="_blank">
            <i>
              <FiTwitter />
            </i>
            Twitter
          </a>
        </Link>
      </main>

      <Background />
    </div>
  )
}