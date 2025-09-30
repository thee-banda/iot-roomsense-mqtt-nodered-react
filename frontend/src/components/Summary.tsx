
import { useLanguage, type LocalizedText } from '../context/LanguageContext.tsx'

export type AreaSummaryMetric = {
  label: LocalizedText
  value: LocalizedText
  changeLabel?: LocalizedText
  changeDirection?: 'up' | 'down' | 'steady'
}

export type AreaSummary = {
  areaName: LocalizedText
  temperature: {
    current: number
    unit: LocalizedText
  }
  metrics: AreaSummaryMetric[]
  lastUpdated: string | Date
}

type SummaryProps = {
  summary: AreaSummary
}

const summaryCopy = {
  TH: {
    sectionLabel: 'สรุปพื้นที่',
    currentTempLabel: 'อุณหภูมิปัจจุบัน',
    sourceLabel: 'สร้างจาก Temp Area API',
    updatedPrefix: 'อัปเดต',
  },
  EN: {
    sectionLabel: 'Area Summary',
    currentTempLabel: 'Current Temp',
    sourceLabel: 'Generated from Temp Area API',
    updatedPrefix: 'Updated',
  },
} as const

const Summary = ({ summary }: SummaryProps) => {
  const { language } = useLanguage()
  const locale = language === 'TH' ? 'th-TH' : 'en-US'
  const lastUpdated = new Date(summary.lastUpdated).toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit',
  })
  const copy = summaryCopy[language]

  return (
    <section className="w-full max-w-5xl rounded-[16px] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
      <div className="flex flex-col gap-5 px-5 py-5 sm:px-8 sm:py-6">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
              {copy.sectionLabel}
            </p>
            <h2 className="mt-1 text-xl font-semibold text-slate-900 sm:text-2xl">
              {summary.areaName[language]}
            </h2>
          </div>
          <div className="flex w-full flex-wrap items-start justify-between gap-3 sm:w-auto sm:flex-nowrap sm:items-center">
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-wide text-slate-400">
                {copy.currentTempLabel}
              </p>
              <p className="text-2xl font-bold text-emerald-600 sm:text-3xl">
                {summary.temperature.current}
                <span className="ml-1 text-xs align-top sm:text-sm">
                  {summary.temperature.unit[language]}
                </span>
              </p>
            </div>
          </div>
        </header>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {summary.metrics.map((metric) => (
            <div
              key={metric.label[language]}
              className="flex items-center justify-between rounded-[12px] border border-slate-100 bg-slate-50/80 px-4 py-3"
            >
              <span className="text-sm font-medium text-slate-600">
                {metric.label[language]}
              </span>
              <div className="text-right">
                <p className="text-base font-semibold text-slate-800">
                  {metric.value[language]}
                </p>
                {metric.changeLabel ? (
                  <p
                    className={`text-xs font-medium ${
                      metric.changeDirection === 'down'
                        ? 'text-rose-500'
                        : metric.changeDirection === 'up'
                        ? 'text-emerald-600'
                        : 'text-slate-400'
                    }`}
                  >
                    {metric.changeLabel[language]}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <footer className="flex flex-col gap-2 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>{copy.sourceLabel}</span>
          <span>
            {copy.updatedPrefix} {lastUpdated}
          </span>
        </footer>
      </div>
    </section>
  )
}

const tampAreaSummaryExample: AreaSummary = {
  areaName: {
    TH: 'พื้นที่แทมป์',
    EN: 'Tamp Area',
  },
  temperature: {
    current: 23,
    unit: {
      TH: 'องศา C',
      EN: 'deg C',
    },
  },
  metrics: [
    {
      label: {
        TH: 'อุณหภูมิเฉลี่ย (24ชม.)',
        EN: 'Avg Temp (24h)',
      },
      value: {
        TH: '22.4 องศา C',
        EN: '22.4 deg C',
      },
      changeLabel: {
        TH: '+0.6 องศา C เทียบกับเมื่อวาน',
        EN: '+0.6 deg C vs yesterday',
      },
      changeDirection: 'up',
    },
    {
      label: {
        TH: 'ความชื้น',
        EN: 'Humidity',
      },
      value: {
        TH: '48 %RH',
        EN: '48 %RH',
      },
      changeLabel: {
        TH: '-3 % เทียบกับค่ามาตรฐาน',
        EN: '-3 % vs baseline',
      },
      changeDirection: 'down',
    },
    {
      label: {
        TH: 'การใช้งานพื้นที่',
        EN: 'Occupancy',
      },
      value: {
        TH: '62 %',
        EN: '62 %',
      },
      changeLabel: {
        TH: 'คงที่',
        EN: 'steady',
      },
      changeDirection: 'steady',
    },
  ],
  lastUpdated: new Date().toISOString(),
}

export { tampAreaSummaryExample }
export default Summary