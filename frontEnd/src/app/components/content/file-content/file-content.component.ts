import { Component, OnInit, Input } from '@angular/core';
import { DocumentsService } from '../../../services/documents.service';
import { SidebarComponent } from '../sidebar/sidebar.component';


@Component({
  selector: 'app-file-content',
  templateUrl: './file-content.component.html',
  styleUrls: ['./file-content.component.css']
})
export class FileContentComponent implements OnInit {
  myDocument: { name: string, content: string } = { name: "", content: "" }
  @Input() state = true;
  @Input() details: any;
  
  constructor(private documentsServices: DocumentsService, private sidebar: SidebarComponent) { }

  ngOnInit(): void {
  }
  save() {
    //UPDATE
    if (this.details.name) {
      this.documentsServices.putFile(this.details.name, this.details)
        .subscribe(document => {
          console.log(document);
          this.sidebar.getAllDocuments();
        })
    } else {
    //NEW
      this.documentsServices.postFile(this.details)
        .subscribe(document => {
          console.log(document);
          this.sidebar.getAllDocuments();
        })
    }
  }

}
