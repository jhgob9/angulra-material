import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeComponent } from './tree/tree.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { FormControlsComponent } from './form-controls/form-controls.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {path: 'main', component: MainComponent},
  {path: 'address-form', component: AddressFormComponent},
  {path: 'table', component: TableComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'tree', component: TreeComponent},
  {path: 'drag-drop', component: DragDropComponent},
  {path: 'form-controls', component: FormControlsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
