import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { IShirt } from './ishirt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShirtService {

  private shirts_api = "http://mock-shirt-backend.getsandbox.com/shirts";

  constructor(private httpClient: HttpClient) { }

  getAllShirts():Observable<IShirt[]>{
     return this.httpClient.get<IShirt[]>(this.shirts_api);
  }
}
