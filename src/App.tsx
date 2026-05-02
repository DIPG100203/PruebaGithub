import Features from "./components/Features"
import Hero from "./components/Hero"
import Logo from "./components/Logo"
import NavBar from "./components/NavBar"


function App() {
  
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <NavBar />
      <main>
        <Hero />
        <Logo />
        <Features />
      </main>
    </div>  
  )
}

export default App
