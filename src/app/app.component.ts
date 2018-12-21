import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthService) {
    this.authService.handleLoginCallback();
  }
}
