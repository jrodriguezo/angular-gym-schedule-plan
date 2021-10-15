import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { CalorieNinjaService } from '../calorie-ninja/calorie-ninja.service';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})
export class FoodFormComponent implements OnInit {
  foods: any = [];
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
    for(var i = 0; i < recipes.length; i++){
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
    this.calorieNinjaService.getFood(name).subscribe(data =>{
      let apiResponse = Object.values(data);
      if(apiResponse[0].length !== 0){
        let foodMacrosResponse = apiResponse[0][0];
        this.foods.push(foodMacrosResponse);
        this.recipes.push(new Recipe(id,fullFoodName,foodMacrosResponse.protein_g,foodMacrosResponse.carbohydrates_total_g,foodMacrosResponse.fat_total_g));
      }else{
        this.recipes.push(new Recipe(id,fullFoodName,proteins,carbohydrates,fats));
      }
    });
    this.id++;
    this.recipeName = '';
    this.recipePros = 0;
    this.recipeCarbs = 0;
    this.recipeFats = 0;
  }
  constructor(public calorieNinjaService: CalorieNinjaService) { }


  ngOnInit(): void {
  }

}
