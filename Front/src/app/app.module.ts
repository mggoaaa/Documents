import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContentComponent } from './component/content/content.component';
import { SidebarComponent } from './component/content/sidebar/sidebar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { FileContentComponent } from './component/content/file-content/file-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    FileContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
