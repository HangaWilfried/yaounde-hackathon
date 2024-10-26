import { emptyUser, User } from '@/domain/User'
import { emptyValue, Value } from '@/domain/Value'

import type { Status } from '@/utils/types/enum'

export class Transaction {
  public isNull: boolean;

  constructor(private transaction: {[id: string]: unknown}) {
    this.isNull = false
  }

  get id(): string {
    return this.transaction.id
  }

  get issueDate(): string {
    return this.transaction.issueDate
  }

  get status(): Status {
    return this.transaction.status
  }

  get fees(): Value {
    return this.transaction.fees ? new Value(this.transaction.fees) : emptyValue()
  }

  get productId(): string {
    return this.transaction.productId
  }

  get author(): User {
    return this.transaction.author ? new User(this.transaction.author) : emptyUser()
  }
}

export const emptyTransaction = (): Transaction => {
  const transaction = new Transaction({})
  transaction.isNull = true;
  return transaction;
}
