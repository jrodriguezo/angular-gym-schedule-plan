import { Component, OnInit } from "@angular/core";

import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-food-schedule',
  templateUrl: './food-schedule.component.html',
  styleUrls: ['./food-schedule.component.css']
})
export class FoodSchedule implements OnInit {
  oneMotivationalPhrases = '';
  motivationalPhrases = ['IF YOU WANT DIFFERENT RESULTS, DO NOT DO THE SAME THINGS','SEE TO BELIEVE'];
  index = 0;

  constructor() { }


  ngOnInit(): void {
    setInterval(() => {
      console.log(this.index)
      this.oneMotivationalPhrases = this.motivationalPhrases[this.index];
      this.index++;
      if(this.index > this.motivationalPhrases.length-1){
        this.index = 0;
      }
    }, 5000);
  }

}
