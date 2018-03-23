import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mercucial } from './mercucial';


@Injectable()
export class MercucialService {

  mercucial: Mercucial[];

  getMercucial(): Observable<Mercucial[]>{
    //return this.http.get<Mercucial[]>()
    //return of(this.mercucial);

    return this.http.get<Mercucial[]>("./assets/datas.json");
  }

  constructor( private http: HttpClient ) { }

}
