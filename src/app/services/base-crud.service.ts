import { BaseModel } from './../models/base.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment'


export abstract class BaseCrudService<T extends BaseModel> {

    protected baseUrl = environment.API_URL;

    constructor(urlSufix: string, protected http: HttpClient) {
        if (urlSufix[0] == '/'){
            urlSufix = urlSufix.slice(1);
        }
        this.baseUrl += urlSufix;
    }

    getAll(): Observable<T[]> {
        return this.http.get<T[]>(this.baseUrl);
      }

    create(item: T): Observable<T> {
      return this.http.post<T>(this.baseUrl, item);
    }

    update(item: T): Observable<T> {
      const url = `${this.baseUrl}/${item.id}`;
      return this.http.put<T>(url, item);
    }

    delete(id: string): Observable<T> {
      return this.http.delete<T>(`${this.baseUrl}/${id}`);
    }
}
