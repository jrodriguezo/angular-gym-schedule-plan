import { NgModule } from "@angular/core";
import { RouterModule, RouterState, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { FoodFormComponent } from "./food/food-form/food-form.component";
import { FoodTableComponent } from "./food/food-table/food-table.component";

const routes: Routes = [
  { path: '', component: FoodTableComponent },
  { path: 'create', component: FoodFormComponent, canActivate: [AuthGuard]},
  { path: 'edit/:foodId', component: FoodFormComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
