import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Idea, IdeaService } from '../../servicios/idea.service/idea.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ver-idea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ver-idea.component.html',
  styleUrls: ['./ver-idea.component.css']
})
export class VerIdeaComponent implements OnInit {
  idea: Idea | undefined;

  constructor(
    private readonly rutaActiva: ActivatedRoute,
    private readonly enrutador: Router,
    private readonly servicioIdeas: IdeaService
  ) { }

  ngOnInit(): void {
    const idParam = this.rutaActiva.snapshot.paramMap.get('id');
    if (idParam) {
      const ideaId = +idParam;
      this.idea = this.servicioIdeas.obtenerIdeaPorId(ideaId);
    }
  }

  volver(): void {
    this.enrutador.navigate(['/']);
  }
}
