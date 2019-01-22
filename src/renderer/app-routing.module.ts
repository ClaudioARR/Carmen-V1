import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonthscardComponent } from '../renderer/app/components/monthscard/monthscard.component';
import { MonthviewComponent } from '../renderer/app/components/monthview/monthview.component';
import { AddComponent } from '../renderer/app/components/add/add.component';
import { InformviewComponent } from '../renderer/app/components/informview/informview.component';

const routes: Routes = [
  {
    path: 'view',
    component: MonthviewComponent
  },
  {
    path: 'inform',
    component: InformviewComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: '',
    component: MonthscardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
