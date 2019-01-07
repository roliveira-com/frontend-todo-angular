import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {Task} from '../models/task.model';

@Injectable()
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get('http://todo.local/api/item')
  }

  updateTask(id: number, item: Task){
    const HEADER = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.put(`http://todo.local/api/item/${id}`, JSON.stringify({content: item}), {headers: HEADER})
      // .map(response => response)
  }

  deleteTask(id: number){
    return this.http.delete(`http://todo.local/api/item/${id}`)
  }

}
