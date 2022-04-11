import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIresponse, GameDetails } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) { }


  public getGamesList(): Observable<APIresponse<GameDetails>>{
    return this.httpClient.get<APIresponse<GameDetails>>(`${env.BaseUrl}/api/games`);
  }


  public getGamesCategoryList(category:string,search:string): Observable<APIresponse<GameDetails>>{
    let parameterss = new HttpParams();
    if(category){
      parameterss = new HttpParams().set('category',category);
    }

    return this.httpClient.get<APIresponse<GameDetails>>(`${env.BaseUrl}/api/games`, {
      params: parameterss,
    });
  }

  public getGamesId(id:number): Observable<APIresponse<GameDetails>>{
    let parameterss = new HttpParams();
    if(id){
      parameterss = new HttpParams().set('id',id);
    }

    return this.httpClient.get<APIresponse<GameDetails>>(`${env.BaseUrl}/api/game`, {
      params: parameterss,
    });
  }
}
