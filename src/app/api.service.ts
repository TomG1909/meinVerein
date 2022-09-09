import { MitgliedModelServerResponse } from './../model/Interface/serverResponse';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Mitglied } from 'src/model/Interface/mitglied.class';



@Injectable({
  providedIn: 'root'
})



export class ApiService {
  url_all: string = 'https://dummyjson.com/users'
  constructor(private HttpClient: HttpClient) {

  }

  getAllUsers(): Observable<Mitglied[]> {
    return this.HttpClient.get<MitgliedModelServerResponse>(this.url_all)
      .pipe(map(response => response.users))

  }

  getSingleUser(id: any): Observable<Mitglied[]> {
    return this.HttpClient.get<MitgliedModelServerResponse>('https://dummyjson.com/users/' + id)
      .pipe(map(response => response.users))

  }
}
