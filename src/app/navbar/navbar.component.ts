import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _messageServices:CommunicationService) { 
    this._messageServices.chartName.subscribe(selectedChart=>{
      this.chartName=selectedChart;
    })
  }
  chartName:any;

  ngOnInit() {
  }

}
