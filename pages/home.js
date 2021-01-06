import Head from 'next/head'
import Contenido from '../components/principal/Contenido'
import Header from '../components/principal/Header'
import Navbar from '../components/ui/Navbar'



export default function Home() {
  return (
    <div>
      <main>
       <Navbar/>
       <Header/>
      </main>

        
    </div>
  )
}
