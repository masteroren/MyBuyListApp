import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {

    }

    getRecipes() {

    }

    getRecipe(id: number): Observable<any> {
        return this.http.get(`http://192.168.1.6/mybuylistwebapi/api/recipes/${id}`);
    }
}