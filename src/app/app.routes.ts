import { Routes } from '@angular/router';
import { AddParfum } from './add-parfum/add-parfum';
import { Parfums } from './parfums/parfums';
import { UpdateParfum } from './update-parfum/update-parfum';
import { RechercheParGenre } from './recherche-par-genre/recherche-par-genre';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';

export const routes: Routes = [
    {path: "parfums", component :Parfums},
    {path: "add-parfum", component : AddParfum} ,
    {path : "updateParfum/:id",component:UpdateParfum},
    {path : "rechercheParGenre",component:RechercheParGenre},
    {path : "rechercheParNom",component:RechercheParNom} ,
    {path: "", redirectTo: "parfums", pathMatch: "full"}

];
