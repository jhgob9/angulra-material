import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// BrowserAnimationsModule import 구문 추가
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// 애니메이션을 사용 안 할 경우 아래 코드 참고
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';

// tslint:disable-next-line: max-line-length
import { MatSlideToggleModule, MatAutocompleteModule, MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatMenuModule, MatTreeModule, MatCheckboxModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeComponent } from './tree/tree.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { FormAutocompleteComponent } from './form-autocomplete/form-autocomplete.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressFormComponent,
    MainComponent,
    TableComponent,
    DashboardComponent,
    TreeComponent,
    DragDropComponent,
    FormControlsComponent,
    FormAutocompleteComponent,
    FormCheckboxComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
