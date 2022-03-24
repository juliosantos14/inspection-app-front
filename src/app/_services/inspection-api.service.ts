import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {
  readonly inspectionApiUrl = "https://localhost:7031/api"

  constructor(private http:HttpClient) { }

  obterTodos() : Observable<any[]>{
    return this.http.get<any>(`${this.inspectionApiUrl}/Inspections`)
  }

  adicionar(data: any){
    return this.http.post(this.inspectionApiUrl + '/inspections', data)
  }

  atualizar(id:number | string , data:any){
    return this.http.put(this.inspectionApiUrl + `/Inspections/${id}`, data)
  }

  deletar(id :number | string){
    return this.http.delete(this.inspectionApiUrl+ `/Inspections/${id}`)
  }

  obterTodosTypes() : Observable<any[]>{
    return this.http.get<any>(`${this.inspectionApiUrl}/InspectionTypes`)
  }

  adicionarTypes(data: any){
    return this.http.post(this.inspectionApiUrl + '/InspectionTypes', data)
  }

  atualizarTypes(id:number | string , data:any){
    return this.http.put(this.inspectionApiUrl + `/InspectionTypes${id}`, data)
  }

  deletarTypes(id :number | string){
    return this.http.delete(this.inspectionApiUrl+ `/InspectionTypes/${id}`)
}

obterTodosStatus() : Observable<any[]>{
  return this.http.get<any>(`${this.inspectionApiUrl}/Status`)
}

adicionarStatus(data: any){
  return this.http.post(this.inspectionApiUrl + '/Status', data)
}

atualizarStatus(id:number | string , data:any){
  return this.http.put(this.inspectionApiUrl + `/Status${id}`, data)
}

deletarStatus(id :number | string){
  return this.http.delete(this.inspectionApiUrl+ `/Status/${id}`)
}

}
