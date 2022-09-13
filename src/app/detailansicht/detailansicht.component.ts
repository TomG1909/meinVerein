import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mitglied } from 'src/model/Interface/mitglied.class';
import { ApiService } from '../api.service';

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



    console.log('User ID', id)
    this.getCurrentUser(id)

  }

  getCurrentUser(id: any) {
    this.api.getSingleUser(id).subscribe(result => {
      this.currentUser = result;

      console.log('current User', result);
    })
  }


}



