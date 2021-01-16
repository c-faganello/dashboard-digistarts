import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-realizado-programado',
  templateUrl: './chart-realizado-programado.component.html',
  styleUrls: ['./chart-realizado-programado.component.scss']
})
export class ChartRealizadoProgramadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public chartType: string = 'doughnut';

  public chartDatasets: Array<any> = [
    { data: [15, 40, 30, 35], label: 'My First dataset' }
  ];

  public chartLabels: Array<any> = ['realizadas', 'abertas', 'justificadas', 'reprogramadas'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['rgb(5, 150, 0)', '#46BFBD', '#666363',  '#d13d50'],
      hoverBackgroundColor: ['rgb(5, 150, 0)', '#5AD3D1', '#666363', '#d13d50'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true, legend: {
      display: true,
      position: 'bottom',
      fullWidth: true,
      reverse: false,
    }
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
