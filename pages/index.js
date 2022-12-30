import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import Intro from './intro'
import About from './about'
import Services from './services'
import Card from './card'
import Portfolio from './projecs'
import { useState } from 'react';
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Head>
        <title>Westliam Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={darkMode ? "dark" : ""}>
      <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-black dark:text-white ease-in' >
        <section className=' min-h-screen'>
        <div className=' py-10 mb-6 flex justify-between'>
         <h1 className=' text-xl font-burtons'>Westliam</h1>
         <ul className=' flex items-center'>
            <li>
                <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} 
                className=' cursor-pointer text-xl'/>
                </li>
            <li>
            <a className='  bg-blue-600 text-white px-4 py-2 rounded-md ml-8' href="/westliam resume.png" download>
                  Resume
              </a>
            </li>
         </ul>
       </div>
       <div>
        <About/>
        <Intro/>
       </div>
        </section>
        <section>
          <Services/>
          <Card/>
        </section>
        <section>
          <Portfolio/>
        </section>
      </main>
      </div>
    </>
  )
}
