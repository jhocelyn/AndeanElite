export interface CircuitsPackageModel {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  whyChooseUs: string[];
  itinerary: string[];
  startDate: string;
  endDate: string;
  includes: string[];
  notIncluded: string[];
  from: string;
  optional: string[];
  politics: string[];
  images: {
    alt: string;
    src: string;
    width: number;
  }[];
  comfort:{
    name:string,
    simple:string,
    double:string,
    triple:string,
    child:string,
    category:string

  }[];
  deluxe:{
    name:string,
    simple:string,
    double:string,
    triple:string,
    child:string,
    category:string
  }[];
  premium:{
    name:string,
    simple:string,
    double:string,
    triple:string,
    child:string,
    category:string

  }[];
}
