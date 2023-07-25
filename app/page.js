'use client'

import { gsap, Expo } from 'gsap'
import { useLayoutEffect, useRef, createRef } from 'react'

import styles from './page.module.css'
import { Circles, HeroImage, Name } from '@/components'
import Navbar from '../components/Navbar'

export default function Home() {
  const home = useRef()
  const projects = useRef()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(projects.current, {
        autoAlpha: 0,
        duration: 1.6,
        opacity: 0,
        y: 40,
        ease: Expo.easeInOut,
        delay: 0.6,
      })
    }, home)
    return () => ctx.revert()
  }, [])

  return (
    <main ref={home}>
      <Navbar />
      <div className={styles.projects} ref={projects}>
        view projects
      </div>
      <div className={styles.container}>
        <HeroImage />
        <Circles />
        <Name />
      </div>
    </main>
  )
}
