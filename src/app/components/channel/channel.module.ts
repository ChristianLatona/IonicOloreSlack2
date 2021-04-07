import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChannelComponent } from './channel.component';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ShowUserModalModule } from '../show-users-modal/show-user-modal.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ],
  declarations: [ChannelComponent],
  exports: [ChannelComponent]
})
export class ChannelModule { }