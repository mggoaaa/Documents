import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  private api = 'http://localhost:5000/documents';
  constructor(private http:HttpClient) { }
  getAllDocuments(){
    const path = `${this.api}`;
    return this.http.get<any>(path);
  }
  getAllDocumentsByName(name: string){
    const path = `${this.api}/${name}`;
    
    return this.http.get<any>(`${path}`);
  }

  postFile(myDocument: string){
    const path = `${this.api}`;
    
    return this.http.post<any>(path,myDocument);
  }
  deleteFile(name: string){
    const path = `${this.api}/${name}`;
    
    return this.http.delete<any>(path );
  }
  putFile(name: string,myDocument: any){
    const path = `${this.api}/${name}`;
    
    return this.http.put<any>(path,myDocument);
  }
}
