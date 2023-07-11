import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';



const base_url=environment.base
@Injectable({

  providedIn: 'root'
})
export class JugadorService {

  private url=`${base_url}/jugador`
  constructor(private http:HttpClient) { }

}
