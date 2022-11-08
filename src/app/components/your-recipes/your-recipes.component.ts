import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateRecipesDto } from 'src/app/models/recipes.model';

@Component({
  selector: 'app-your-recipes',
  templateUrl: './your-recipes.component.html',
  styleUrls: ['./your-recipes.component.scss']
})
export class YourRecipesComponent implements OnInit {

  recipes: any =[]

  recipesForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    elaboration: new FormControl(''),
    ingredients: new FormControl(''),
    time: new FormControl(''),
    rations: new FormControl(''),
    image: new FormControl('')
})

  constructor() { }

  ngOnInit(): void {
  }

}
