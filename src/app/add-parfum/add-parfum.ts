import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ParfumService } from '../services/parfum.service';
import { Router } from '@angular/router';
import { Genre } from '../model/genre.model';
import { Parfum } from '../model/parfum.model';

@Component({
  selector: 'app-add-parfum',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-parfum.html',
})
export class AddParfum implements OnInit {
  parfumForm!: FormGroup;
  genres!: Genre[];
  message = '';
  err = '';
  loading = false;

  constructor(
    private fb: FormBuilder,
    private parfumService: ParfumService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Charger les genres
    this.genres = this.parfumService.listeGenres();

    // Initialisation du formulaire réactif
    this.parfumForm = this.fb.group({
      idParfum: ['', Validators.required],
      marqueParfum: ['', Validators.required],
      nomParfum: ['', Validators.required],
      prixParfum: ['', Validators.required],
      contenanceParfum: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], // ✅ Validation email
      idGen: ['', Validators.required],
    });
  }

  addParfum() {
    if (this.parfumForm.invalid) {
      this.err = 'Veuillez remplir tous les champs obligatoires correctement.';
      this.parfumForm.markAllAsTouched();
      return;
    }

    this.loading = true;

    const newParfum: Parfum = {
      idParfum: this.parfumForm.value.idParfum,
      marqueParfum: this.parfumForm.value.marqueParfum,
      nomParfum: this.parfumForm.value.nomParfum,
      prixParfum: this.parfumForm.value.prixParfum,
      contenanceParfum: this.parfumForm.value.contenanceParfum,
      genre: this.parfumService.consulterGenre(this.parfumForm.value.idGen),
      // on ajoute email pour stocker si tu veux
      email: this.parfumForm.value.email
    };

    this.parfumService.ajouterParfum(newParfum);
    this.message = `Parfum "${newParfum.nomParfum}" ajouté avec succès !`;

    // Petit délai pour montrer le message avant redirection
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['parfums']);
    }, 1000);
  }
}
