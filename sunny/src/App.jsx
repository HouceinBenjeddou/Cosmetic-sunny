import './index.css'
import { CTA, FAQ, Footer, Hero, HowToUse, Navbar, Showcase, Sponsors, Testimonials } from './components'
function App() {

  return (
    <div>
      <div>
        <Navbar />
        <Hero />
        <Showcase />     
        <HowToUse />     
        <Sponsors />     
        <Testimonials />     
        <FAQ />     
        <CTA />     
        <Footer />
      </div>
    </div>
  )
}

export default App
