import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'poc-primeng';
  products = [
    { name: 'Laptop', price: 1500 },
    { name: 'Phone', price: 800 },
    { name: 'Tablet', price: 600 }
  ];


  cities: any[] = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
];;

  selectedCities:any;
}
