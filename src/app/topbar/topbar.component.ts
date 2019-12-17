import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private _messageServices:CommunicationService) { 
    this._messageServices.chartName.subscribe(selectedChart=>{
      this.chartName=selectedChart;
    })
  }
  chartName:any;
  ngOnInit() {
  }
sendData(selectedChart){
  console.log(selectedChart)
this._messageServices.chartName.next(selectedChart)
}
}
