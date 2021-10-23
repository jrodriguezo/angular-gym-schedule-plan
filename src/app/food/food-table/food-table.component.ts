import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Food } from '../food.model';
import { FoodsService } from '../foods.service';

@Component({
  selector: 'app-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.css']
})
export class FoodTableComponent implements OnInit, OnDestroy {
  foods: Food[] = [];
  private foodsSub: Subscription;

  displayedColumns = ['name','proteins','carbohydrates','fats','sugars','calories','actions'];

  constructor(public foodsService: FoodsService) { }

  ngOnInit(): void {
    this.foodsService.getFoods();
    this.foodsSub = this.foodsService.getFoodsListener()
      .subscribe((foods: Food[]) => {
          this.foods = foods;
    });
  }

  ngOnDestroy(): void {
    this.foodsSub.unsubscribe();
  }

}









