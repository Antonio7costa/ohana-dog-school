export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type Testimonial = {
  id: string;
  name: string;
  rating: number; // 0-5
  comment: string;
  avatarUrl: string;
};