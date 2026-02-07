
export interface PreviewData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  siteName: string;
  createdAt: number;
<<<<<<< HEAD
  dir?: 'ltr' | 'rtl';
=======
>>>>>>> b69e4e463f6416991999e2ebe1e3055f15fb973b
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
