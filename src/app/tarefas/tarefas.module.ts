import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasGridComponent } from './tarefas-grid/tarefas-grid.component';

import { WavesModule, TableModule, CardsModule, IconsModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [TarefasGridComponent],
  imports: [
    CommonModule,WavesModule,TableModule,CardsModule,IconsModule
  ],exports:[TarefasGridComponent]
})
export class TarefasModule { }
