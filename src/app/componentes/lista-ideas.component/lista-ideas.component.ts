import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Idea, IdeaService } from '../../servicios/idea.service/idea.service';

@Component({
  selector: 'app-lista-ideas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-ideas.component.html',
  styleUrls: ['./lista-ideas.component.css']
})
export class ListaIdeasComponent implements OnInit {
  ideas: Idea[] = [];

  constructor(private readonly servicioIdeas: IdeaService, private readonly enrutador: Router) {

  }

  ngOnInit(): void {
    this.cargarIdeas();
  }

  cargarIdeas(): void {
    this.ideas = this.servicioIdeas.obtenerIdeas();
  }

  agregarIdea(): void {
    this.enrutador.navigate(['/crear-idea']);
  }

  eliminarIdea(id: number): void {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar esta idea?');
    if (confirmacion) {
      this.servicioIdeas.eliminarIdea(id);
      this.cargarIdeas();
    }
  }

  editarIdea(id: number): void {
    this.enrutador.navigate(['/editar-idea', id]);
  }

  verIdea(id: number): void {
    this.enrutador.navigate(['/ver-idea', id]);
  }
}
