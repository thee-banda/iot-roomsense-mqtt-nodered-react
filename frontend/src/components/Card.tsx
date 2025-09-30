import { useLanguage, type LocalizedText } from '../context/LanguageContext.tsx'

type SensorReading = {
  label: LocalizedText
  description?: LocalizedText
  value: number
  unit: LocalizedText
  timestamp?: string | Date
}

type CardProps = {
  reading: SensorReading
}

const cardCopy = {
  TH: {
    updated: 'อัปเดต',
  },
  EN: {
    updated: 'Updated',
  },
} as const

const Card = ({ reading }: CardProps) => {
  const { language } = useLanguage()
  const locale = language === 'TH' ? 'th-TH' : 'en-US'
  const formattedTimestamp = reading.timestamp
    ? new Date(reading.timestamp).toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' })
    : null

  return (
    <div className="w-full max-w-sm rounded-[20px] border border-emerald-200/60 bg-[rgba(38,175,25,0.33)] p-4 text-slate-800 shadow-[inset_0_4px_0_rgba(0,0,0,0.25)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:p-5">
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-emerald-900 sm:text-base">
              {reading.label[language]}
            </h3>
            {reading.description ? (
              <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                {reading.description[language]}
              </p>
            ) : null}
          </div>

        </div>
        <div className="flex items-baseline justify-between gap-4">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-emerald-950 sm:text-4xl">
              {reading.value}
            </span>
            <span className="text-xs uppercase tracking-wider text-slate-600 sm:text-sm">
              {reading.unit[language]}
            </span>
          </div>
        </div>
        {formattedTimestamp ? (
          <p className="text-right text-xs text-slate-500 sm:text-sm">
            {cardCopy[language].updated} {formattedTimestamp}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export type { SensorReading }
export default Card