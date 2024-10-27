import type { NotificationDTO } from '@/utils/types'

export class Notification {
  public isNull: boolean;

  constructor(private notification: NotificationDTO) {
    this.isNull = false
  }

  get id(): string {
    return this.notification.id ?? "";
  }

  get issueDate(): string {
    return this.notification.issueDate ?? "";
  }

  get content(): string {
    return this.notification.content ?? "";
  }
}

export const emptyNotification = (): Notification => {
  const notification = new Notification({})
  notification.isNull = true;
  return notification;
}
