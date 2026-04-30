import './styles/variables.css'
import Navbar from './components/Navbar'
import UrgencyBanner from './components/UrgencyBanner'
import MainSection from './components/MainSection'
import BigJoinButton from './components/BigJoinButton'
import SocialProof from './components/SocialProof'
import DealCards from './components/DealCards'
import WhyJoinUs from './components/WhyJoinUs'
import Footer from './components/Footer'
import FloatingButton from './components/FloatingButton'
import StickyFooterBtn from './components/StickyFooterBtn'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <UrgencyBanner />
      <main style={{ paddingBottom: '80px' }}>
        <MainSection />
        <BigJoinButton />
        <SocialProof />
        <DealCards />
        <WhyJoinUs />
      </main>
      <Footer />
      <FloatingButton />
      <StickyFooterBtn />
    </div>
  )
}