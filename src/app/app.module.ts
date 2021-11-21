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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FoodSchedule } from './food/food-schedule/food-schedule.component';
import { FoodsService } from './food/foods.service';
import { FoodTableComponent } from './food/food-table/food-table.component';
import { AppRoutingModule } from './app-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginComponent } from './auth/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FoodComponent,
    FoodFormComponent,
    FoodSchedule,
    FoodTableComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    MatTableModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [CalorieNinjaService, FoodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
