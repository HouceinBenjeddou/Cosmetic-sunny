import './index.css'
import { CTA, FAQ, Footer, Hero, HowToUse, Navbar, Showcase, Sponsors, Testimonials, Feature } from './components'
function App() {

  return (
    <div>
      <div>
        <Navbar />
        <Hero />
        <Showcase />   
        <Feature />  
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
