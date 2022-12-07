import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ProfileDetailComponent } from './components/profile-detail/profile-detail.component';
import { ProfileDetailItemsComponent } from './components/profile-detail-items/profile-detail-items.component';
import { EducationComponent } from './components/education/education.component';
import { EmploymentHistoryComponent } from './components/employment-history/employment-history.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ProfileDetailComponent,
    ProfileDetailItemsComponent,
    EducationComponent,
    EmploymentHistoryComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
