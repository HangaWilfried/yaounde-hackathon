import { Role } from '@/utils/types/enum'
import type { UserDTO } from '@/utils/types'

export class User {
  public isNull: boolean;
  constructor(private user: UserDTO) {
    this.isNull = false;
  }

  get id(): string {
    return this.user.id ?? ""
  }

  get email(): string {
    return this.user.email ?? ""
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
    return this.user.role ?? Role.USER
  }

  get dto(): UserDTO {
    return this.user
  }
}

export const emptyUser = (): User => {
  const user = new User({})
  user.isNull = true
  return user
}
