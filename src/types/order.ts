export type CartItem = {
  productId: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
};

export type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled";

export type Order = {
  id: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  createdAt: string;
};
