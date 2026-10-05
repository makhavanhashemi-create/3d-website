import MetaBar from './components/MetaBar'
import Header from './components/Header'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import FeaturedProperties from './components/FeaturedProperties'
import ValuationBanner from './components/ValuationBanner'
import WhyChooseUs from './components/WhyChooseUs'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <MetaBar />
      <Header />
      <main>
        <Hero />
        <FeatureGrid />
        <FeaturedProperties />
        <ValuationBanner />
        <WhyChooseUs />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
