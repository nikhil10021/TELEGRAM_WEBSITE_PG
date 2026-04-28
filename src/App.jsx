import './styles/variables.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import DealGallery from './components/DealGallery'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <DealGallery />
      </main>
      <Footer />
    </div>
  )
}