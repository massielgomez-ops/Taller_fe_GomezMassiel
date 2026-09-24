import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  hero = {
    eyebrow: 'ENTRENAMIENTO · NUTRICIÓN · COMUNIDAD',
    title: 'Construye una versión más fuerte de ti.',
    description: 'Entrena con intención, acompaña tu proceso con un plan real y convierte la constancia en resultados que puedas sentir.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Persona entrenando con pesas en un gimnasio'
  };
}
