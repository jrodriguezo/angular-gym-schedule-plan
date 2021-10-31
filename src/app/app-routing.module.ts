import { NgModule } from "@angular/core";
import { RouterModule, RouterState, Routes } from "@angular/router";
import { FoodFormComponent } from "./food/food-form/food-form.component";
import { FoodTableComponent } from "./food/food-table/food-table.component";

const routes: Routes = [
  { path: '', component: FoodTableComponent },
  { path: 'create', component: FoodFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
