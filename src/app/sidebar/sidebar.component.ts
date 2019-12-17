import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private _messageServices:CommunicationService) {
    this._messageServices.chartName.subscribe(selectedChart=>{
      this.chartName=selectedChart;
    })
   }
chartName:any;
  ngOnInit() {
  }
  sendData(selectedChart){
    
  this._messageServices.chartName.next(selectedChart.text)
  }

}
