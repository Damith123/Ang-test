import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OngoingItemsComponent } from './ongoing-items/ongoing-items.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OngoingItemsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: OngoingItemsComponent }]),
    MatCardModule,
    MatButtonModule,
  ]
})
export class OngoingItemsModule { }
