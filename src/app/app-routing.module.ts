import { DetailansichtComponent } from './detailansicht/detailansicht.component';
import { MitgliedAnlegenComponent } from './mitglied-anlegen/mitglied-anlegen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MitgliederlisteComponent } from './mitgliederliste/mitgliederliste.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'Mitglieder', component: MitgliederlisteComponent },
{ path: 'Mitglied-anlegen', component: MitgliedAnlegenComponent },
{ path: 'Mitglieder/:id', component: DetailansichtComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
