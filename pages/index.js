import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSelector, useDispatch } from "react-redux";
import { iconAction } from "../store/icon-slice";
import sun24 from "../icons/sun-24.png";
import moon30 from "../icons/moon-30.png";
import Link from 'next/link'

export default function Home() {

  const dispatcher = useDispatch()

  let icon = useSelector(state => state.icon)

  function changeIcon() {

    icon.icon === "moon" ? dispatcher(iconAction.iconSun()) : dispatcher(iconAction.iconMoon())

  }


  return (
    <div style={{ backgroundColor: icon.icon === "moon" ? "white" : "#000000b5" }} className={styles.container}>

      <main className={styles.main}>
        <div className='NavBar'> 
          <Link href="/">
            <a className='item'>Home</a>
          </Link>
          <Link href="/about">
            <a className='item'>About</a>
          </Link>
        </div>

        <div onClick={changeIcon} className='iconBox'>
          <Image
            width={30}
            height={30}
            objectFit="cover"
            src={icon.icon === 'moon' ? moon30 : sun24}
            alt="image"
          />
        </div>


        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
