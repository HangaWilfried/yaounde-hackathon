import type { StatisticDTO } from '@/utils/types'

export class Statistic {
  public isNull: boolean

  constructor(private stat: StatisticDTO) {
    this.isNull = true
  }

  get text(): string {
    return this.stat.text ?? ""
  }

  get total(): number {
    return this.stat.total ?? 0
  }
}

export const emptyStatistic = (): Statistic => {
  const stat = new Statistic({})
  stat.isNull = true
  return stat
}
