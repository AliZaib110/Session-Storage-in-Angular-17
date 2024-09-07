// import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sessionStorage';
  key = 'key 2';
  tokken = '9485y45y4897539232our38748394yr892379';
  data1: string | null = '';
  data2: string | null = 'press save Data button ';

  constructor() {
    localStorage.setItem('key 1', '342ueryiuwegfvhgdehgr76573tegdg7ew6');
    this.data1 = localStorage.getItem('key 1');
  }

  saveData() {
    localStorage.setItem(this.key, this.tokken);
    this.getData();
  }
  getData() {
    this.data2 = localStorage.getItem(this.key);
    console.log(this.data2);
  }
  removeData() {
    localStorage.removeItem(this.key);
    this.getData();
  }
  clearData() {
    localStorage.clear();
    this.getData();
  }
}
