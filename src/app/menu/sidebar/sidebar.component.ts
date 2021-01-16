import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  display = false;
  displayUploadPerfil = false;
  constructor() { }

  ngOnInit(): void {
  }
  getSrc() {

    return 'assets/avatar.jpg';

  }

}
