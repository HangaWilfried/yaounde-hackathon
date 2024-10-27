import type { ValueDTO } from '@/utils/types'

export class Value {
  public isNull: boolean

  constructor(private value: ValueDTO) {
    this.isNull = false
  }

  get currency(): string {
    return this.value.currency ?? "XAF"
  }

  get amount(): number {
    return this.value.amount ?? 0
  }

  get format(): string {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: this.currency
    }).format(this.amount)
  }
}

export const emptyValue = (): Value => {
  const value = new Value({})
  value.isNull = true
  return value
}
