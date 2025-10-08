import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParfumService } from '../services/parfum.service';
import { Parfum } from '../model/parfum.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-parfum',
  imports: [FormsModule,CommonModule],
  templateUrl: './update-parfum.html',
  styles: ``
})
export class UpdateParfum implements OnInit{
  currentParfum  = new Parfum();
  constructor(private activatedRoute: ActivatedRoute,
            private router :Router,
            private parfumService: ParfumService){
    
  }
  ngOnInit(): void {
   this.currentParfum = this.parfumService.consulterParfum(this.activatedRoute.snapshot.params['nomParfum']);
   console.log(this.currentParfum); 
  }
   updateParfum()
  { 
    this.parfumService.updateParfum(this.currentParfum);
    this.router.navigate(['parfums']);

  }
}


