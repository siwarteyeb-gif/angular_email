import { Component ,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Parfum } from '../model/parfum.model';
import { ParfumService } from '../services/parfum.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-parfum',
  imports: [FormsModule],
  templateUrl: './add-parfum.html'
})
export class AddParfum implements OnInit{
  newParfum = new Parfum();
  message!:string;
  constructor(private parfumService:ParfumService, private router :Router){

  }
  ngOnInit(): void {
    
  }
  addParfum(){
   // console.log(this.newParfum);
    this.parfumService.ajouterParfum(this.newParfum);
    //this.message="parfun  "+this.newParfum.nomParfum+"ajouté avec succés";
    this.router.navigate(['parfums']);
  }

}
