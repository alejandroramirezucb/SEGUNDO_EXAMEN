import { Injectable } from '@angular/core';

export interface Idea {
  id: number;
  titulo: string;
  descripcion: string;
  categoria: string;
  estado: 'Borrador' | 'Validando' | 'Descartada';
}

@Injectable({
  providedIn: 'root'
})
export class IdeaService {
  private ideas: Idea[] = [];
  private proximoId = 1;

  constructor() { }

  obtenerIdeas(): Idea[] {
    return this.ideas;
  }

  obtenerIdeaPorId(id: number): Idea | undefined {
    return this.ideas.find(idea => idea.id === id);
  }

  agregarIdea(idea: Omit<Idea, 'id'>): void {
    this.ideas.push({ ...idea, id: this.proximoId++ });
  }

  actualizarIdea(ideaActualizada: Idea): void {
    const indice = this.ideas.findIndex(idea => idea.id === ideaActualizada.id);
    if (indice !== -1) {
      this.ideas[indice] = ideaActualizada;
    }
  }

  eliminarIdea(id: number): void {
    this.ideas = this.ideas.filter(idea => idea.id !== id);
  }
}
