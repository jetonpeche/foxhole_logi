import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../type/item';
import { ListeObj } from '../type/listeObj';

@Injectable({
  providedIn: 'root'
})
export class ListeService 
{
  constructor(private http: HttpClient) { }

  GetListeObj(): Item[]
  {
    return JSON.parse(sessionStorage.getItem("listeItem"));
  }

  ListerListe(): Observable<ListeObj[]>
  {
    return this.http.get<ListeObj[]>(`${environment.url}/listeObj/listerListeObj.php`);
  }

  AjouterLister(_info): Observable<any>
  {
    return this.http.post(`${environment.url}/listeObj/ajouterListe.php`, _info);
  }

  ReduireQteItem(_info): Observable<any>
  {
    return this.http.post(`${environment.url}/listeObj/reduireQteItem.php`, _info);
  }

  ModifierListe(_info): Observable<any>
  {
    return this.http.post(`${environment.url}/listeObj/modifierListe.php`, _info);
  }

  SupprimerListe(_info): Observable<any>
  {
    return this.http.post(`${environment.url}/listeObj/supprimerListe.php`, _info);
  }

  SupprimerItemListe(_info): Observable<any>
  {
    return this.http.post(`${environment.url}/listeObj/supprimerItemListe.php`, _info);
  }
}
