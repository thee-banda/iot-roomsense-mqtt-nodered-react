import './index.css'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1120]">
      <div className="flex flex-col items-center gap-6">
        <Navbar />
        <Footer />
      </div>
    </div>
  )
}

export default App
