import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subject,BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  chartName = new BehaviorSubject("PieChart");
  constructor(private _http:HttpClientModule) { }
}
