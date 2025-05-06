export interface Book {
  audioLink: string | undefined;
  videoLink: string | undefined;
  pdfLink(pdfLink: any, arg1: string): void;
  id: string;
  title: string;
  author: string;
  coverImage: string;
  genre: string;
  description: string;
  shortDescription: string;
  publishYear: number;
  pages: number;
  downloadUrl: string;
}