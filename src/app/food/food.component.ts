import { Component, OnInit } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  storedFoods: Food[] = [];

  onPostAdded(food) {
    this.storedFoods.push(food);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
