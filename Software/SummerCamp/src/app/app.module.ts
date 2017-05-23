import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import {Http, HttpModule} from '@angular/http';
import {routes} from '../app/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {DataTableModule} from "angular2-datatable";
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';



export function customLoader(http: Http) {
  return new TranslateHttpLoader(http, '/../assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes,
    DataTableModule,
    HttpModule,
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: customLoader,
          deps: [Http]
        }
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
