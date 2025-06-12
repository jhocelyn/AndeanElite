export interface NewsItem {
  slug: string;
  title: string;
  city: string;
  category: string;
  date: string;
  image: string;
  text?: string;
  summary?: string; // Agregado para mostrar resumen en tarjeta
  context_Image?:string;
  author?: string; // Agregado para mostrar autor en tarjeta
}
