import { Component } from '@angular/core';
import { CommunicationService } from './services/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newAmp';
  constructor(private _messageServices:CommunicationService) { 
    this._messageServices.chartName.subscribe(selectedChart=>{
      this.chartName=selectedChart;
    })
  }
  chartName:any;
}
