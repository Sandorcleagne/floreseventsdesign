export interface Information {
  id: number;
  image: string;
  productName: string;
  productDescription: string;
  productPrice: string;
  availability: boolean;
}

export interface BreadCurmsProps {
  homeRoute: string;
  currentPage?: string;
  nextObject?: Information;
}
