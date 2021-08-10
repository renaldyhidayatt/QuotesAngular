import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listQuotes: any[] = [];

  addQuotes(a: any) {
    this.listQuotes.push(a);
    console.log(this.listQuotes);
  }
  removeQuotes(i: number) {
    this.listQuotes.splice(i, 1);
  }
}
