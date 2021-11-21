import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { Food } from '../food.model';
import { FoodsService } from '../foods.service';
import { TotalMacros } from '../totalMacros.model';

@Component({
  selector: 'app-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.css']
})
export class FoodTableComponent implements OnInit, OnDestroy {
  foods: Food[] = [];
  private foodsSub: Subscription;

  displayedColumns = ['name','proteins','carbohydrates','fats','sugars','calories','actions'];
  displayedTotalColumns = ['totalProteins'];
  totalMacros: TotalMacros;
  totalFoods = 0;
  foodsPerPage = 5;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];


  constructor(public foodsService: FoodsService) { }

  ngOnInit(): void {
    this.foodsService.getFoods(this.foodsPerPage, this.currentPage);
    this.foodsSub = this.foodsService.getFoodsListener()
      .subscribe((foodData: {foods: Food[], foodCount: number}) => {
          this.totalFoods = foodData.foodCount;
          this.foods = foodData.foods;
          this.totalMacros = this.totalSumOfMacros(foodData.foods);
    });

  }

  onChangedPage(pageData: PageEvent){
    this.currentPage = pageData.pageIndex + 1;
    this.foodsPerPage = pageData.pageSize;
    this.foodsService.getFoods(this.foodsPerPage, this.currentPage);
  }

  onDeleteFood(foodId: string){
    this.foodsService.deleteFood(foodId).subscribe(() => {
      this.foodsService.getFoods(this.foodsPerPage, this.currentPage);
    });
  }

  totalSumOfMacros(foods: Food[]){
    const totalMacros: TotalMacros = {
      proteins: 0,
      carbohydrates: 0,
      fats: 0,
      sugars: 0,
      calories: 0
    }
    for(var i = 0; i < foods.length; i++){
      totalMacros.proteins +=  foods[i].proteins;
      totalMacros.carbohydrates +=  foods[i].carbohydrates;
      totalMacros.fats +=  foods[i].fats;
      totalMacros.sugars +=  foods[i].sugars;
      totalMacros.calories +=  foods[i].calories;
    }
    return totalMacros;
  }


  ngOnDestroy(): void {
    this.foodsSub.unsubscribe();
  }

}









function foodsObtained(foodsObtained: any): any {
  throw new Error('Function not implemented.');
}

