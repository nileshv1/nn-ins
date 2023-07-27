import { StaticImageData } from "next/image";

export interface IBanner {
  image:  string | StaticImageData ;
  imageText:string;
}
