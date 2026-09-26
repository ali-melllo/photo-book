export type Product = {
  id: string;
  title: string;
  slug: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  reviewCount?: number;
  category: string;
  badge?: string;
};

export type Category = {
  id: string;
  title: string;
  slug: string;
};

export type Testimonial = {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  role?: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};
