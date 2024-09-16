export type UserCredentials = {
  email: string;
  password: string;
  rememberMe: boolean;
}

export type User = {
  email: string; 
  password: string;
  rememberMe: string;
}

export type products = {
    id: string,
    name: string,
    overview: string,
    long_description: string,
    price: number,
    poster: string,
    image_local: string,
    rating: number,
    in_stock: boolean,
    size: number,
    best_seller: boolean,
};
