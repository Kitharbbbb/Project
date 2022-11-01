import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutemePageRoutingModule } from './abouteme-routing.module';

import { AboutemePage } from './abouteme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutemePageRoutingModule
  ],
  declarations: [AboutemePage]
})
export class AboutemePageModule {}
