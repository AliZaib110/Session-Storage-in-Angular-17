// import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'sessionStorage';
  LocalStorageKey = 'token';
  LocalTokken = '9485y45y4897539232our38748394yr892379';
  localData: string | null = '';
  localData1: string | null = 'press save Data button ';

  sessionKey = 'session token';
  sessionTokken = '1213243534564787';
  sessionData: string | null = '';
  sessionData1: string | null = 'press save Data button ';
  storage: any[] = [];

  constructor() {
    localStorage.setItem('token 1', '342ueryiuwegfvhgdehgr76573tegdg7ew6');
    this.localData = localStorage.getItem('token 1');

    sessionStorage.setItem('token', '8752784t27te36yevg');
    this.sessionData = sessionStorage.getItem('token');
  }

  ngOnInit() {
    this.factorialFinder(3);
  }

  factorialFinder(num: number) {
    if (num == 0 || num == 1) {
      return 1;
    } else {
      for (let i = num - 1; i >= 1; i--) {
        num = num * i;
      }
      console.log(num, 'num');
      return num;
    }
  }

  // local storage
  saveLocalData() {
    localStorage.setItem(this.LocalStorageKey, this.LocalTokken);
    this.getLocalData();
  }
  getLocalData() {
    this.localData1 = localStorage.getItem(this.LocalStorageKey);
  }
  removeLocalData() {
    localStorage.removeItem(this.LocalStorageKey);
    this.getLocalData();
  }
  clearLocalData() {
    localStorage.clear();
    this.getLocalData();
  }
  // session storage

  saveSessionData() {
    sessionStorage.setItem(this.sessionKey, this.sessionTokken);
    this.getSessionData();
  }

  getSessionData() {
    this.sessionData1 = sessionStorage.getItem(this.sessionKey);
  }
  removeSessionData() {
    sessionStorage.removeItem(this.sessionKey);
    this.getSessionData();
  }

  clearSessionData() {
    sessionStorage.clear();
    this.getSessionData();
  }
}
