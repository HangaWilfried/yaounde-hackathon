export class Statistic {
  public isNull: boolean

  constructor(private stat: {[id: string]: unknown}) {
    this.isNull = true
  }

  get text(): string {
    return this.stat.text
  }

  get total(): number {
    return this.stat.total
  }
}

export const emptyStatistic = (): Statistic => {
  const stat = new Statistic({})
  stat.isNull = true
  return stat
}
