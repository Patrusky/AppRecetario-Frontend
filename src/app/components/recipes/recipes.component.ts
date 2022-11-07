import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: any =[];
  backendHost: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAll();

  }
  getAll(){
      this.httpClient.get(`${this.backendHost}/recetas`)
      .subscribe(res =>{
        this.recipes = res;
        console.log(this.recipes,'hola')
      })
    }

}
