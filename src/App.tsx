import './App.scss'
import Header from './components/Header'
import HeroSection from './components/Hero/HeroSection'
import Accreditions from './components/Accreditions'
import ProgramsSection from './components/ProgramsSection'
import Companies from './components/Companies'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <Accreditions />
      <ProgramsSection />
      <Companies />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  )
}

export default App