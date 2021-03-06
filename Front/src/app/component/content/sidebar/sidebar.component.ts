import { Component, OnInit } from '@angular/core';
import { DocumentsService } from 'src/app/services/documents.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  myDocument: { name: string, content: string } = { name: "", content: "" }
  documents: any
  state = true
  constructor(private documentsServices: DocumentsService) { }

  ngOnInit() {
    this.getAllDocuments();
  }
  getAllDocuments() {
    this.documentsServices.getAllDocuments()
      .subscribe(document => {
        this.documents = document;
        console.log(document)
      });

  }
  getDocumentByName(name: any) {
    this.documentsServices.getAllDocumentsByName(name)
      .subscribe(document => {
        this.myDocument = document;
        console.log(document);
      });
      this.state = !this.state;
  }
  deleteDocument(name: any) {
    this.documentsServices.deleteFile(name).subscribe(
      res => {
        console.log(res)
        this.getAllDocuments();
        alert("Was deleted");
      },
      err => console.log(err)
    )
  }
  resetForm() {
    this.myDocument = { 'name': '', 'content': '' };
  }
  someFunction() {
    this.state = !this.state;
  }

}
