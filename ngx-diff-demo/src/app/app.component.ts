import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBySideDiffComponent } from 'ngx-diff';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideBySideDiffComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngx-diff';
  
  myObject1 = {
    name: 'John',
    age: 30,
    isActive: true,
    hobbies: ['reading', 'gaming', 'coding'],
    zipCode: 1234,
    gender: 'male'
  };
  myObject2 = {
    name: 'John',
    age: 29,
    isActive: false,
    hobbies: ['reading', 'coding', 'writing'],
    zipCode: 1234,
    gender: 'male'
  };  
  oldDocumentContents =  JSON.stringify(this.myObject1, null, 2);
  newDocumentContents =  JSON.stringify(this.myObject2, null, 2);
}
