import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mitglied } from 'src/model/Interface/mitglied.class';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-detailansicht',
  templateUrl: './detailansicht.component.html',
  styleUrls: ['./detailansicht.component.scss']
})
export class DetailansichtComponent implements OnInit {

  id: any;
  currentUser: Mitglied = new Mitglied();


  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.getCurrentUser(id)

  }
  /**
   * This function gets current User data from API by id
   * @param id 
   */
  getCurrentUser(id: any) {
    this.api.getSingleUser(id).subscribe(result => {
      this.currentUser = result;
    })
  }


}



