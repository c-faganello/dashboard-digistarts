import { DashboardModule } from './../dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [SidebarComponent],
  imports: [
    IconsModule,
    CommonModule,RouterModule.forRoot(
      [
        {path:'',
        loadChildren: () => import('./../dashboard/dashboard.module').then(m => m.DashboardModule)}
      ]
    )
  ],exports:[SidebarComponent]
})
export class MenuModule { }
