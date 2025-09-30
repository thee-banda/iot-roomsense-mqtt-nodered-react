import Summary, { tampAreaSummaryExample } from './components/Summary.tsx'
import Card, { type SensorReading } from './components/Card.tsx'

const sampleReading: SensorReading = {
  label: 'Environment',
  description: 'Live sensor snapshot',
  value: 23,
  unit: 'deg C',
  timestamp: new Date().toISOString(),
}

function App() {
  return (
    <div className="flex flex-col items-center gap-6 pb-12">
      <Summary summary={tampAreaSummaryExample} />
      <Card reading={sampleReading} />
    </div>
  )
}

export default App
