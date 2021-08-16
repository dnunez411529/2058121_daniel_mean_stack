import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loginCheck: boolean = false;
  regiCheck: boolean = true;
  portCheck: boolean = false;

  hide(hideName: string) {}
  register(regiRef: NgForm) {
    let regi = regiRef.value;
  }
  title = 'angular-portfolio';
}
