import { Component } from '@angular/core';


@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {


  productos = [
    {
      nombre: 'Fuerza base', nivel: 'Principiante',
      descripcion: 'Rutinas guiadas para aprender técnica, moverte mejor y ganar confianza.',
      precio: 39, duracion: 'por semana',
      imagen: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=700&q=85', destacado: false
    },
    {
      nombre: 'Potencia', nivel: 'Intermedio',
      descripcion: 'Fuerza, cardio y progresión semanal para acelerar tus objetivos.',
      precio: 59, duracion: 'por semana',
      imagen: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=85', destacado: true
    },
    {
      nombre: 'Rendimiento', nivel: 'Avanzado',
      descripcion: 'Programa personalizado para quienes quieren superar su propio límite.',
      precio: 79, duracion: 'por semana',
      imagen: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=700&q=85', destacado: false
    }
  ];


}

