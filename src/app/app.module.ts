import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalorieNinjaService } from './food/calorie-ninja/calorie-ninja.service'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FoodComponent } from './food/food.component';
import { FoodFormComponent } from './food/food-form/food-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from '@angular/material/table';
import { FoodTableComponent } from './food-table/food-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FoodComponent,
    FoodFormComponent,
    FoodTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [CalorieNinjaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
