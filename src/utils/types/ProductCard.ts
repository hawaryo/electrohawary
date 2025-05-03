interface Variant {
  value: string | number;
  variant_id: number;
}

// the product without variant type
export interface ProductCardSimple {
  id: number;
  product_title: string;
  image_url: string;
  image_alt: string;
  price: number;
  attributes: null;
}

// the product with variant type
export interface ProductCardWithVariants {
  id: number;
  product_title: string;
  image_url: string | null;
  image_alt: string | null;
  price: number | null;
  attributes: {[key: string]: Variant[]};
}

export type ProductVariantDetails = {
  product_image: {
    url: string;
    alt: string;
  };
  price: number;
} | null;

export type ProductCard = ProductCardSimple | ProductCardWithVariants;
