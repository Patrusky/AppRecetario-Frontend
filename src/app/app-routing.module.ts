import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes.component';
import { YourRecipesComponent } from './components/your-recipes/your-recipes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/recetas', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'recetas', component: RecipesComponent },
  { path: 'tus_recetas', component: YourRecipesComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
