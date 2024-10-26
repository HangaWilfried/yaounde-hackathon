import type { Role } from '@/utils/types/enum'

export class User {
  public isNull: boolean;
  constructor(private user: {[id: string]: unknown}) {
    this.isNull = false;
  }

  get lastname(): string {
    return this.user.lastname ?? ""
  }

  get firstname(): string {
    return this.user.firstname ?? ""
  }

  get picture(): string {
    return this.user.picture ?? ""
  }

  get role(): Role {
    return this.user.role
  }
}

export const emptyUser = (): User => {
  const user = new User({})
  user.isNull = true
  return user
}
