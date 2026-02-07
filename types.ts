
export interface PreviewData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  siteName: string;
  createdAt: number;
}

export enum UserType {
  BOT = 'BOT',
  HUMAN = 'HUMAN'
}

export enum Platform {
  WHATSAPP = 'WhatsApp',
  FACEBOOK = 'Facebook',
  TELEGRAM = 'Telegram',
  X = 'X/Twitter'
}
