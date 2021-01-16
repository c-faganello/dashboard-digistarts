import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-tarefas',
  templateUrl: './chart-tarefas.component.html',
  styleUrls: ['./chart-tarefas.component.scss']
})
export class ChartTarefasComponent implements OnInit {
  ngOnInit(): void {

  }
  constructor() { }
  public chartType: string = 'line';
 
  public chartDatasets: Array<any> = [
    { data: [20, 10, 3, 5, 15, 0], label: 'Tarefas realizadas', fill: false, },
    { data: [12, 14, 3, 10, 30, 0], label: 'Tarefas justificadas', fill: false, },
    { data: [1, 33, 14, 8, 35, 0], label: 'Tarefas reprogramadas', fill: false, },
    { data: [3, 17, 5, 15, 40, 0], label: 'Tarefas em aberto', fill: false, }
  ];

  public chartLabels: Array<any> = ['set', 'out', 'nov', 'dez', 'jan', 'fev'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgb(5, 150, 0)',
      borderColor: 'rgb(5, 150, 0)',
      borderWidth: 2,
    },
    {
      backgroundColor: '#666363',
      borderColor: '#666363',
      borderWidth: 2,
    },
    {
      backgroundColor: '#d13d50',
      borderColor: '#d13d50',
      borderWidth: 2,
    },
    {
      backgroundColor: '#045c5a',
      borderColor: '#045c5a',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true,
    legend: {
      display: true,
      position: 'bottom',
      fullWidth: true,
      reverse: false,
    }
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
