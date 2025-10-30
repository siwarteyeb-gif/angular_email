import { Genre } from "./genre.model";

export class Parfum { 
    idParfum?:number;
    marqueParfum? : string; 
    nomParfum? : string; 
    prixParfum? : number; 
    contenanceParfum? : string ; 
    genre! : Genre;
    email!:String;
    } 