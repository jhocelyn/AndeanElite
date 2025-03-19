export interface TravelPackage {
  id: number;
  title: string;
  subtitle: string;
  days: number;
  nights: number;
  price: number;
  mapUrl: {name:string,lat:number,lng:number,day:number}[];
  description: {
    highlights: string[];
    text: string;
    itinerary: {
      dayTitle: string;
      daySubtitle: string;
      dayDescription: string;
    }[];
  };
  sampleJourney: {
    dayTitle: string;
    daySubtitle: string;
    dayDescription: string;
    accommodations: {
      stars: number;
      title: string;
      image: string;
      location: string;
    }[];
  }[];
  customOptions: {
    description: string;
    packages: {
      title: string;
      image: string;
    }[];
  };
  pricing: {
    title: string;
    included: string[];
    notIncluded: string[];
  };
  images:
    {alt:string; src:string; width:number; }[]
}
