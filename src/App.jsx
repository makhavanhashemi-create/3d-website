import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import FeaturedProperties from './components/FeaturedProperties'
import ValuationBanner from './components/ValuationBanner'
import WhyChooseUs from './components/WhyChooseUs'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <FeaturedProperties />
        <ValuationBanner />
        <WhyChooseUs />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
