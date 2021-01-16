import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefas-grid',
  templateUrl: './tarefas-grid.component.html',
  styleUrls: ['./tarefas-grid.component.scss']
})
export class TarefasGridComponent implements OnInit {
  elements: any = [
    {id: 1, descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing', status:'ABERTA', programado: '16/01/2020',color:'#045c5a'},
    {id: 2, descricao: ' Donec vestibulum massa ac tempor ornare. Integer lao', status:'REALIZADA', programado: '15/01/2020',color:'rgb(5, 150, 0)'},
    {id: 3, descricao: 'Suspendisse a aliquet sapien. In purus lectus, condimentum et lectus ut', status:'REPROGRAMADA', programado: '12/01/2020',color:'#d13d50'},
    {id: 4, descricao: 'vulputate neque. Mauris ornare tellus vel facilisis feugiat', status:'JUSTIFICADA', programado: '08/01/2020',color:'#666363'},

  ];

  headElements = ['Id', 'Descrição', 'Status', 'programado'];
  constructor() { }

  ngOnInit(): void {
  }

}
