import { TarefasModule } from './../tarefas/tarefas.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PainelComponent } from './painel/painel.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { IconsModule, ChartsModule, CardsModule } from 'angular-bootstrap-md';
import { ChartTarefasComponent } from './chart-tarefas/chart-tarefas.component';
import { ChartRealizadoProgramadoComponent } from './chart-realizado-programado/chart-realizado-programado.component';


@NgModule({
  declarations: [PainelComponent, CardInfoComponent, ChartTarefasComponent, ChartRealizadoProgramadoComponent],
  imports: [
    CommonModule,IconsModule,ChartsModule,CardsModule,TarefasModule,IconsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
