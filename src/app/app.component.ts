import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'profile-resume';

  tabs: any[] = [
    {
      text: 'Owned',
      id: 'owned',
    },
    {
      text: 'Creations',
      id: 'collection',
    },
    {
      text: 'Profile Data',
      id: 'profileData',
    },
  ];

}
