import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllItemsComponent } from './all-items/all-items.component';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AllItemsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AllItemsComponent }]),
    MatCardModule,
    MatButtonModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    RouterModule,
    MatInputModule
  ]
})
export class AllItemsModule { }
