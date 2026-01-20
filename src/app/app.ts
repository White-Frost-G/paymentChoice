import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  items = [
    { name: 'Body', image: '/body.png',},
    { name: 'Visa', image: '/visa.png' },
    { name: 'Mastercard', image: '/mastercard.png' },
    { name: 'PayPal', image: '/paypal.png' }
  ];
  selectedItem = this.items[0];
  canChange: boolean = true;

  selectItem(item: any){
    if (this.canChange) return;
    this.selectedItem = item;
  }
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const canChangeChoice = params['change'];
      this.canChange = canChangeChoice == "false";
    });
  }
}
