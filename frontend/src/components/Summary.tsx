export type AreaSummaryMetric = {
  label: string
  value: string
  changeLabel?: string
  changeDirection?: 'up' | 'down' | 'steady'
}

export type AreaSummary = {
  areaName: string
  temperature: {
    current: number
    unit: string
  }
  metrics: AreaSummaryMetric[]
  lastUpdated: string | Date
}

type SummaryProps = {
  summary: AreaSummary
}

const Summary = ({ summary }: SummaryProps) => {
  const lastUpdated = new Date(summary.lastUpdated).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <section className="w-[390px] rounded-[16px] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)] px-6 py-5">
      <header className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Area Summary</p>
          <h2 className="text-xl font-semibold text-slate-900 mt-1">{summary.areaName}</h2>
        </div>
        <div className="text-right">
          <p className="text-[10px] uppercase tracking-wide text-slate-400">Current Temp</p>
          <p className="text-2xl font-bold text-emerald-600">
            {summary.temperature.current}
            <span className="text-xs align-top ml-1">{summary.temperature.unit}</span>
          </p>
        </div>
      </header>
      <div className="mt-5 grid grid-cols-1 gap-3">
        {summary.metrics.map((metric) => (
          <div
            key={metric.label}
            className="flex items-center justify-between rounded-[12px] border border-slate-100 bg-slate-50/80 px-4 py-3"
          >
            <span className="text-sm font-medium text-slate-600">{metric.label}</span>
            <div className="text-right">
              <p className="text-base font-semibold text-slate-800">{metric.value}</p>
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
                  {metric.changeLabel}
                </p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      <footer className="mt-5 flex items-center justify-between text-[11px] text-slate-400">
        <span>Generated from Temp Area API</span>
        <span>Updated {lastUpdated}</span>
      </footer>
    </section>
  )
}

const tampAreaSummaryExample: AreaSummary = {
  areaName: 'Tamp Area',
  temperature: {
    current: 23,
    unit: 'deg C',
  },
  metrics: [
    {
      label: 'Avg Temp (24h)',
      value: '22.4 deg C',
      changeLabel: '+0.6 deg C vs yesterday',
      changeDirection: 'up',
    },
    {
      label: 'Humidity',
      value: '48 %RH',
      changeLabel: '-3 % vs baseline',
      changeDirection: 'down',
    },
    {
      label: 'Occupancy',
      value: '62 %',
      changeLabel: 'steady',
      changeDirection: 'steady',
    },
  ],
  lastUpdated: new Date().toISOString(),
}

export { tampAreaSummaryExample }
export default Summary
