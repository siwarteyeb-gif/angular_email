import { Injectable } from '@angular/core';
import { Parfum } from '../model/parfum.model';

@Injectable({
  providedIn: 'root'
})
export class ParfumService {
  parfums : Parfum[];
  //parfum!: Parfum[];
  constructor(){
    console.log("creation du service produit!");
    this.parfums = [
      {marqueParfum:"Giorgio Armani",nomParfum:"My Way",prixParfum:350,contenanceParfum:"50 ml"},
      { marqueParfum: "Yves Saint Laurent",nomParfum: "Libre",prixParfum: 370,contenanceParfum: "50 ml"},
      {marqueParfum: "Dior",nomParfum: "J’adore",prixParfum: 400,contenanceParfum: "50 ml"}

    ]; 
  }
  listeParfum():Parfum[]{
    return this.parfums;
  }
  ajouterParfum(par:Parfum){
    this.parfums.push(par);
  }
  supprimerParfum(parf:Parfum){
    const index=this.parfums.indexOf(parf,0);
    if(index>-1){
      this.parfums.splice(index,1);
    }
  }
  consulterParfum(nom:string):Parfum{
    return this.parfums.find(p => p.nomParfum == nom)!;
  }
  updateParfum( parf: Parfum){
      const index = this.parfums.indexOf(parf, 0);
      if (index > -1) {
      this.parfums.splice(index, 1);
      this.parfums.splice(index,0,parf);
   } }
}
