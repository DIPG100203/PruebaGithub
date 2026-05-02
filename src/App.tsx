import CtaFinal from "./components/Ctafinal"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Logo from "./components/Logo"
import NavBar from "./components/NavBar"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"


function App() {
  
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <NavBar />
      <main>
        <Hero />
        <Logo />
        <Features />
        <Pricing />
        <Testimonials />
        <CtaFinal />
        <Footer />
      </main>
    </div>  
  )
}

export default App
