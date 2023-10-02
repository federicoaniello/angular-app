export interface IProduct {
  "image-thumb": string;
  "image-preview": string;
  name: string;
  description: string;
  price: string;
  link: string;
  color: string[];
  "old-price"?: string;
  discount?: string;
}
