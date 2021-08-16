import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from './Contact';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // boolean values for each component, hiding components that are not needed
  loginCheck: boolean = true;
  regiCheck: boolean = false;
  portCheck: boolean = false;

  // error message for login
  msg: string = '';

  // registration fields held here
  firstName: string = '';
  lastName: string = '';
  userName: string = '';
  password: string = '';

  // portfolio array
  portArr: Array<Contact> = [];
  hide(hideName: string) {
    switch (hideName) {
      case 'regi':
        this.regiCheck = false;
        this.loginCheck = true;
        break;
      case 'login':
        this.regiCheck = true;
        this.loginCheck = false;
        break;
      case 'port':
        this.loginCheck = false;
        this.portCheck = true;
        break;
    }
  }
  login(loginRef: NgForm) {
    let login = loginRef.value;
    if (login.userName === this.userName && login.passWord === this.password) {
      console.log('successful login');
      this.hide('port');
    } else {
      console.log('failed login');
      console.log(login.username, login.passWord);
      this.msg = 'Incorrect Credentials!';
    }
  }
  register(regiRef: NgForm) {
    let regi = regiRef.value;
    this.firstName = regi.fName;
    this.lastName = regi.lName;
    this.userName = regi.userName;
    this.password = regi.password;
    this.show();
    this.hide('regi');
  }
  show() {
    console.log(
      `First Name: ${this.firstName} \n Last Name: ${this.lastName} \n  Userame: ${this.userName} \n Password: ${this.password} \n `
    );
  }
  add(portRef: NgForm) {
    let port = portRef.value;
    let newContact: Contact = new Contact(port.contName, port.phoneNo);
    this.portArr.push(newContact);
    portRef.reset();
  }
}
