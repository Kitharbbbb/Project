import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ForgotpPageRoutingModule } from './forgotp-routing.module';
import { ForgotpPage } from './forgotp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotpPageRoutingModule
  ],
  declarations: [ForgotpPage]
})
export class ForgotpPageModule {}
