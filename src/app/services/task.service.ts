import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Task} from '../models/task.model';

@Injectable()
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get('http://');
  }

}
