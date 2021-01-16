import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {

  totais = 120;
  dados = [
    {total:40,realizada:'ABERTA'},
    {total:30,realizada:'JUSTIFICADA'},
    {total:15,realizada:'REALIZADA'},
    {total:35,realizada:'REPROGRAMADA'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  getColorSnip(nome): string {
    if (nome === 'ABERTA') {
      return 'linear-gradient(45deg, #4099ff, #73b4ff)';
    }
    if (nome === 'REALIZADA') {
      return 'linear-gradient(45deg, #2ed8b6, #59e0c5)';
    }
    if (nome === 'REPROGRAMADA') {
      return 'linear-gradient(45deg, #FF5370, #ff869a)';
    }
    if (nome === 'JUSTIFICADA') {
      return 'linear-gradient(45deg, #FFB64D, #ffcb80)';
    }
    if (nome === 'PROGRAMADO') {
      return '#0d14d6'
    }

    return '#f6f6f6';

  }
  getColor(nome): string {
    if (nome === 'ABERTA') {
      return '#045c5a';
    }
    if (nome === 'REALIZADA') {
      return 'rgb(5, 150, 0)';
    }
    if (nome === 'REPROGRAMADA') {
      return '#cc0c8f';
    }
    if (nome === 'JUSTIFICADA') {
      return 'rgb(172, 0, 0)';
    }
    if (nome === 'PROGRAMADO') {
      return '#0d14d6'
    }

    return '#f6f6f6';

  }
}
