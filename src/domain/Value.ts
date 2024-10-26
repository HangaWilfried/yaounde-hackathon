export class Value {
  public isNull: boolean

  constructor(private value: {[id: string]: unknown}) {
    this.isNull = false
  }

  get currency(): string {
    return this.value.currency
  }

  get amount(): number {
    return this.value.amount
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
