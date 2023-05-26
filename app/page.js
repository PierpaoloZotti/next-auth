
import Image from 'next/image'
/* import { getServerSession } from 'next-auth'; */
import { Inter, Roboto } from 'next/font/google';
import { authOptions } from './api/auth/[...nextauth]/route';
import Header from './components/Header';
import Hero from './components/Hero';
const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })

export default async function Home() {
  /* const session = await getServerSession(authOptions); */
  return (
    <section className={roboto.className}>
      <Header />
      <Hero />


    </section>
  )
}
