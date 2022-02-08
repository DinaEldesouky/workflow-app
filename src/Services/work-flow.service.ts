import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkFlow } from 'src/Models/work-flow';

@Injectable({
  providedIn: 'root',
})
export class WorkFlowService {

  constructor(private http: HttpClient) {}

  workflowId: WorkFlow;

  getAllData(): Observable<WorkFlow[]> {
    return this.http.get<WorkFlow[]>(
      'http://192.168.1.73:9090/approvStpWorkflowTypes/findAllByBranchId/1'
    );
  }

  delete(id: number) {
    console.log(id);
    const allParams = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id: id,
      },
    };
    return this.http.delete<WorkFlow>(
      'http://192.168.1.73:9090/approvStpWorkflowTypes/delete',
      allParams
    );
  }

  update(id: number , row:any):Observable<WorkFlow> {
    console.log(id);
    console.log(row);
    
    const allParams = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id: id,
        row:row
      },
    };
    return this.http.put<WorkFlow>(
      'http://192.168.1.73:9090/approvStpWorkflowTypes/update',
      allParams
    );
  }
}
