import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  username: string;

  isButtonEnabled(): boolean {
    return this.username === null || this.username === '';
  }

  foo(): void {
    this.username = '';
  }
}
