import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IProduct } from 'src/models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 http = inject(HttpClient);
  constructor() { }


  download(api: string):Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`/assets${api}`);
  }
}
