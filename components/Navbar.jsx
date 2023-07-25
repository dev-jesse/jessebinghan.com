'use client'

import { gsap, Expo } from 'gsap'
import { useLayoutEffect, useRef, createRef } from 'react'

import styles from './Navbar.module.css'
import { Circles, HeroImage, Name } from '@/components'

const Navbar = () => {
  const navbar_comp = useRef()
  const navbar = useRef()
  const site_logo = useRef()
  const site_menu = useRef()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(navbar.current.querySelectorAll(':scope > div'), {
        autoAlpha: 0,
        duration: 1.6,
        opacity: 0,
        y: 60,
        ease: Expo.easeInOut,
        delay: 0.6,
      })

      gsap.from(site_logo.current, {
        autoAlpha: 0,
        duration: 1.6,
        opacity: 0,
        y: 60,
        ease: Expo.easeInOut,
        delay: 0.6,
      })

      gsap.from(site_menu.current.querySelectorAll(':scope > div'), {
        autoAlpha: 0,
        duration: 1,
        opacity: 0,
        y: 40,
        ease: Expo.easeInOut,
        stagger: 0.2,
      })
    }, navbar_comp)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={navbar_comp}>
      <div className={styles.site_logo} ref={site_logo}>
        jessebinghan
      </div>
      <div className={styles.navbar} ref={navbar}>
        <div className={styles.site_info}>Download CV</div>
        <div className={styles.site_menu} ref={site_menu}>
          <div className={styles.menu_item}>projects</div>
          <div className={styles.menu_item}>about</div>
          <div className={styles.menu_item}>linkedin</div>
        </div>
      </div>
    </div>
  )
}
export default Navbar
