type SensorReading = {
  label: string
  description?: string
  value: number
  unit: string
  timestamp?: string | Date
}

type CardProps = {
  reading: SensorReading
}

const Card = ({ reading }: CardProps) => {
  const formattedTimestamp = reading.timestamp
    ? new Date(reading.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    : null

  return (
    <div className="w-[200px] h-[137px] rounded-[20px] bg-[rgba(38,175,25,0.33)] backdrop-blur-sm border border-white/5 text-white flex flex-col justify-between p-4 shadow-[inset_0_4px_0_rgba(0,0,0,0.25)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <div>
        <h3 className="text-sm font-semibold tracking-wide">{reading.label}</h3>
        {reading.description ? (
          <p className="text-xs text-white/80 mt-1">{reading.description}</p>
        ) : null}
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-bold">{reading.value}</span>
        <span className="text-xs uppercase tracking-wider text-white/80">{reading.unit}</span>
      </div>
      {formattedTimestamp ? (
        <p className="text-[10px] text-white/60 text-right">Updated {formattedTimestamp}</p>
      ) : null}
    </div>
  )
}

export type { SensorReading }
export default Card
