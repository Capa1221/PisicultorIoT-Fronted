import { Applicationform } from '../../components/applicationForm/Applicationform'
import { Characteristics } from '../../components/characteristics/Characteristics'
import { Developers } from '../../components/developers/Developers'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { Hero } from '../../components/hero/Hero'
import { Technologies } from '../../components/technologies/Technologies'

export const Index  =() => {
  return (
    <div>
      <Header />
      <Hero />
      <Technologies />   
      <Characteristics />
      <Developers />
      <Applicationform />
      <Footer />
    </div>
  )
}

export default Index
