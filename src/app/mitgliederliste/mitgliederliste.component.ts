import { Component, OnInit } from '@angular/core';
import { Mitglied } from 'src/models/mitglied.class';
import { ApiService } from '../api.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-mitgliederliste',
  templateUrl: './mitgliederliste.component.html',
  styleUrls: ['./mitgliederliste.component.scss']
})
export class MitgliederlisteComponent implements OnInit {
  Liste: Mitglied[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.api.getAllUsers().subscribe(result => (this.Liste = result, console.log('Result', this.Liste)));





  }


}
