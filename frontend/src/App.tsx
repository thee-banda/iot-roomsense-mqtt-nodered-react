import Summary, { tampAreaSummaryExample } from './components/Summary.tsx'
import Card, { type SensorReading } from './components/Card.tsx'

const sampleReading: SensorReading = {
  label: {
    TH: 'สภาพแวดล้อม',
    EN: 'Environment',
  },
  description: {
    TH: 'ข้อมูลเซ็นเซอร์แบบเรียลไทม์',
    EN: 'Live sensor snapshot',
  },
  value: 23,
  unit: {
    TH: 'องศา C',
    EN: 'deg C',
  },
  timestamp: new Date().toISOString(),
}

function App() {
  return (
    <div className="flex w-full flex-col items-center gap-6 pb-12 sm:gap-8">
      <Summary summary={tampAreaSummaryExample} />
      {/* <Card reading={sampleReading} /> */}
    </div>
  )
}

export default App