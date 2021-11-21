import { NgModule } from "@angular/core";
import { RouterModule, RouterState, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { FoodFormComponent } from "./food/food-form/food-form.component";
import { FoodTableComponent } from "./food/food-table/food-table.component";

const routes: Routes = [
  { path: '', component: FoodTableComponent },
  { path: 'create', component: FoodFormComponent},
  { path: 'edit/:foodId', component: FoodFormComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
