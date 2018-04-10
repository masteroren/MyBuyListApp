import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IRecipe } from '../interfaces/recipe';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {

    }

    getRecipes(): Observable<IRecipe[]> {
        return this.http.get<IRecipe[]>(`http://192.168.1.6/mybuylistwebapi/api/recipes`);
    }

    getRecipe(id: number): Observable<IRecipe> {
        return this.http.get(`http://192.168.1.6/mybuylistwebapi/api/recipes/${id}`);
    }
}