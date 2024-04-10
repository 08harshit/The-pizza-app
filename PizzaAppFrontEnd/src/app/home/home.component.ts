import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  [x: string]: any;

  pizzas: any[] = [];
  ingredients: any[] = [];
  selectedPizzas: number[] = [];
  selectedIngredients: number[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(`${environment.serverUrl}/pizza`).subscribe((data) => {
      this.pizzas = data as any;
    });

    this.http
      .get(`${environment.serverUrl}/ingredients/getIngredients`)
      .subscribe((ingredients_data) => {
        this.ingredients = ingredients_data as any;
      });
  }

  onPizzaSelect(event: any, pizza: any) {
    if (event.target.checked) {
      this.selectedPizzas.push(pizza.id);
    } else {
      this.selectedPizzas = this.selectedPizzas.filter((id) => id !== pizza.id);
    }

    console.log(this.selectedPizzas);
  }

  onIngredientSelect(event: any, ingredient: any) {
    if (event?.target.checked) {
      this.selectedIngredients.push(ingredient.id);
    } else {
      this.selectedIngredients = this.selectedIngredients.filter(
        (id) => id != ingredient.id
      );
    }
    console.log(this.selectedIngredients);
  }

  makeOrder() {
    const order: any = {};
    this.selectedPizzas.forEach((pizza_id) => {
      order[pizza_id] = this.selectedIngredients;
    });

    this.http.post(`${environment.serverUrl}/order`, { order }).subscribe();
  }
}
