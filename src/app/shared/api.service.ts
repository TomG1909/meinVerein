
import { MitgliedModelServerResponse } from '../../model/Interface/serverResponse';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Mitglied } from 'src/model/Interface/mitglied.class';
import { ToastrService } from 'ngx-toastr';




@Injectable({
  providedIn: 'root'
})



export class ApiService {
  addedUsers: Mitglied[] = [];
  Liste: Mitglied[] = [];
  url_all: string = 'https://dummyjson.com/users?limit=10'
  constructor(private HttpClient: HttpClient, private toastr: ToastrService) {

  }

  /**
   * 
   * @returns - HTTP GET Request response - JSON of users
   */
  getAllUsers(): Observable<Mitglied[]> {
    return this.HttpClient.get<MitgliedModelServerResponse>(this.url_all)
      .pipe(map(response => response.users))

  }

  /**
   * 
   * @param id - User id
   * @returns HTTP GET Request response - gets current User by ID
   */
  getSingleUser(id: any): Observable<Mitglied> {
    return this.HttpClient.get<Mitglied>('https://dummyjson.com/users/' + id)

  }
  /**
   * 
   * @param newUser - Data for new User
   * @returns HTTP POST Request response - adds new User
   */
  addNewUser(newUser: any): Observable<any> {
    return this.HttpClient.post('https://dummyjson.com/users/add', newUser)

  }
  /**
   * 
   * @param {number} id - user id
   * @param user - updated data for the user
   * @returns - HTTP PUT Request response
   */
  updateUser(id: any, user: any): Observable<any> {
    return this.HttpClient.put('https://dummyjson.com/users/' + id, user)

  }
  /**
   * 
   * @param {number} id - user id
   * @returns HTTP Delete Request response
   */
  deleteUser(id: number) {
    return this.HttpClient.delete('https://dummyjson.com/users/' + id)

  }
  /**
   * 
   * @param {string} msg - Message for the alert
   */
  successMessage(msg: string) {
    this.toastr.success(msg)
  }


}
