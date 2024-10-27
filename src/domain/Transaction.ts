import { emptyUser, User } from '@/domain/User'
import { emptyValue, Value } from '@/domain/Value'

import { Status } from '@/utils/types/enum'
import type { TransactionDTO } from '@/utils/types'

export class Transaction {
  public isNull: boolean;

  constructor(private transaction: TransactionDTO) {
    this.isNull = false
  }

  get id(): string {
    return this.transaction.id ?? ""
  }

  get issueDate(): string {
    return this.transaction.issueDate ?? ""
  }

  get status(): Status {
    return this.transaction.status ?? Status.ABORT
  }

  get fees(): Value {
    return this.transaction.fees ? new Value(this.transaction.fees) : emptyValue()
  }

  get productId(): string {
    return this.transaction.productId ?? ""
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
