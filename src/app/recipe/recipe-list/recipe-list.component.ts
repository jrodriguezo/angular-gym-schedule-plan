import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  id = 0;
  rName = '';
  sumPros = 0;
  sumCarbs = 0;
  sumFats = 0;

  recipes: Recipe[] = [];

  onNewRecipe(){
    this.newRecipe(this.id,this.rName,"Delicious pizza with cheese",40,67,32,"https://cdn.pixabay.com/photo/2015/02/13/11/04/pizza-634967_960_720.jpg");
    this.newRecipe(this.id,this.rName,"Pasta",40,78,32,"");
    for(var i = 0; this.recipes.length; i++){
      this.sumPros += this.recipes[i].proteins;
      this.sumCarbs += this.recipes[i].carbohydrates;
      this.sumFats += this.recipes[i].fats;
    }

    

  }

  onDeleteRecipe(key: number){
        this.recipes.forEach((value,index)=>{
        if(value.id==key) this.recipes.splice(index,1);
    });  
  }

  newRecipe(id: number, name: string, description: string, proteins: number, carbohydrates: number, fats: number, imagePath: string){
    name = "food#"+id;
    this.recipes.push(new Recipe(id,name,description,proteins,carbohydrates,fats,imagePath));
    this.id++;
    this.rName = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
