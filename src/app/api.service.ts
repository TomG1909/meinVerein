import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mitglied } from 'src/models/mitglied.class';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'https://dummyjson.com/users'
  constructor(private HttpClient: HttpClient) {

  }

  getAllUsers(): Observable<Mitglied[]> {
    return this.HttpClient.get<Mitglied[]>(this.url)

  }
}
