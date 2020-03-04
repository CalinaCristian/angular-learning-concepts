import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public choice: string;
  public options: Array<string> = ['emulated', 'shadowDom', 'none'];

  constructor() { }

  ngOnInit(): void {
    this.choice = localStorage.getItem('lastChoice') || 'emulated';
  }

  choose(choice) {
    localStorage.setItem('lastChoice', choice);
    this.choice = choice;
    window.location.reload();
  }
}
