import { MitgliedModelServerResponse } from './../model/Interface/serverResponse';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Mitglied } from 'src/model/Interface/mitglied.class';



@Injectable({
  providedIn: 'root'
})



export class ApiService {
  url: string = 'https://dummyjson.com/users'
  constructor(private HttpClient: HttpClient) {

  }

  getAllUsers(): Observable<Mitglied[]> {
    return this.HttpClient.get<MitgliedModelServerResponse>(this.url)
      .pipe(map(response => response.users))

  }
}
