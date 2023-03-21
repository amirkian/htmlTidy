import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Observable, observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfluenceService {

  constructor(private http:HttpClient) { }

  public GetBackEndData():Observable<object>{
return this.http.get("https://confluence.dotin.ir/rest/api/content/108820815?expand=body.view.value");
  }
}
