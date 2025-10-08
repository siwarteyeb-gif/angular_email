import { Routes } from '@angular/router';
import { AddParfum } from './add-parfum/add-parfum';
import { Parfums } from './parfums/parfums';
import { UpdateParfum } from './update-parfum/update-parfum';

export const routes: Routes = [
    {path: "parfums", component :Parfums},
    {path: "add-parfum", component : AddParfum} ,
    {path : "updateParfum/:nomParfum",component:UpdateParfum},
    {path: "", redirectTo: "parfums", pathMatch: "full"}

];
