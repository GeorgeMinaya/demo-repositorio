import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('George Minaya');

  usuarios = [
    { id: 1, nombre: 'Alice', correo: 'alice@example.com' },
    { id: 2, nombre: 'Bob', correo: 'bob@example.com' },
    { id: 3, nombre: 'Charlie', correo: 'charlie@example.com' }
  ];
}
