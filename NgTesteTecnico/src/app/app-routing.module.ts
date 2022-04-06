import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { PessoaComponent } from './pessoa/pessoa.component';

const routes: Routes = [{ path: "", redirectTo: "pessoa", pathMatch: "full" },
{ path: "pessoa", component: PessoaComponent },
{ path: '', redirectTo: 'calculator', pathMatch: 'full' },
{ path: 'calculator', component: CalculatorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
