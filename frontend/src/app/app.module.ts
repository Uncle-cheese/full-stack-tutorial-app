import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './component/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './component/tutorial-details/tutorial-details.component';
import { TutorialListComponent } from './component/tutorial-list/tutorial-list.component';

import{HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './component/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
