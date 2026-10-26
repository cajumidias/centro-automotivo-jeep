export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  whatsappMessage: string;
  iconName: string;
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  rating: number;
  text: string;
  avatarUrl?: string;
  source: string;
  imageSrc: string;
  badge: string;
  badgeType?: 'jeep' | 'guide' | 'trust';
  date?: string;
  clientType?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export type TrackingEventType = 
  | 'whatsapp_click'
  | 'phone_click'
  | 'directions_click'
  | 'service_contact_click';
