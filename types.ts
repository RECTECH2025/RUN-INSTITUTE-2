export interface CourseModule {
  id: number;
  title: string;
}

export interface Facilitator {
  name: string;
  role: string;
  bio: string;
}

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  text: string;
}

export interface CourseData {
  title: string;
  subtitle: string;
  targetAudience: string;
  price: string;
  duration: string;
  modules: CourseModule[];
  facilitators: Facilitator[];
  testimonials: Testimonial[];
  keyQuestions: string[];
  statistics: string[];
  contact: {
    emails: string[];
    phones: string[];
  };
}

export enum Platform {
  Instagram = 'Instagram',
  Facebook = 'Facebook',
  Both = 'IG & FB'
}

export enum ContentType {
  Reel = 'Reel (Short Video)',
  Carousel = 'Carousel',
  Static = 'Static Post',
  Story = 'Story'
}

export interface MarketingPost {
  week: number;
  day: number;
  title: string;
  platform: Platform;
  type: ContentType;
  hook: string;
  contentDescription: string;
  caption: string;
  hashtags: string[];
  visualPrompt: string;
}

export interface MarketingPlanResponse {
  strategyOverview: string;
  posts: MarketingPost[];
}