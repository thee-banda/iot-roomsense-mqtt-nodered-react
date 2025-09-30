import './index.css'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import Card, { type SensorReading } from './components/Card.tsx'

const sampleReading: SensorReading = {
  label: 'Environment',
  description: 'Live sensor snapshot',
  value: 23,
  unit: '°C',
  timestamp: new Date().toISOString(),
}

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="flex flex-col items-center gap-6">
        <Navbar />
        <Card reading={sampleReading} />
        <Footer />
      </div>
    </div>
  )
}

export default App
