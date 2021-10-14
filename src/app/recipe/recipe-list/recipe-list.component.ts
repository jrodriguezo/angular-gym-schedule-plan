import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  id = 0;
  recipeName = '';
  recipePros = 0;
  recipeCarbs = 0;
  recipeFats = 0;
  sumPros = 0;
  sumCarbs = 0;
  sumFats = 0;

  recipes: Recipe[] = [];

  onNewRecipe(){
    this.newRecipe(this.id,this.recipeName,this.recipePros,this.recipeCarbs,this.recipeFats);
    this.totalRecipes(this.recipes);
  }

  totalRecipes(recipes: Recipe[]){
    this.sumPros = 0;
    this.sumCarbs = 0;
    this.sumFats = 0;
    for(var i = 0; recipes.length; i++){
      this.sumPros += recipes[i].proteins;
      this.sumCarbs += recipes[i].carbohydrates;
      this.sumFats += recipes[i].fats;
    }
  }

  onDeleteRecipe(key: number){
    this.recipes.forEach((value,index)=>{
        if(value.id==key) this.recipes.splice(index,1);
    });
    this.totalRecipes(this.recipes);
  }

  newRecipe(id: number, name: string, proteins: number, carbohydrates: number, fats: number){
    let fullFoodName = id + ' - ' + name;
    this.recipes.push(new Recipe(id,fullFoodName,proteins,carbohydrates,fats));
    this.id++;
    this.recipeName = '';
    this.recipePros = 0;
    this.recipeCarbs = 0;
    this.recipeFats = 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
