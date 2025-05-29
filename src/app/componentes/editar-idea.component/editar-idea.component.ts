import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Idea, IdeaService } from '../../servicios/idea.service/idea.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-idea',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './editar-idea.component.html',
  styleUrls: ['./editar-idea.component.css']
})
export class EditarIdeaComponent implements OnInit {
  formularioIdea: FormGroup;
  ideaId: number | undefined;

  constructor(
    private fb: FormBuilder,
    private servicioIdeas: IdeaService,
    private enrutador: Router,
    private rutaActiva: ActivatedRoute
  ) {
    this.formularioIdea = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoria: ['', Validators.required],
      estado: ['Borrador', Validators.required]
    });
  }

  ngOnInit(): void {
    const idParam = this.rutaActiva.snapshot.paramMap.get('id');
    if (idParam) {
      this.ideaId = +idParam;
      const idea = this.servicioIdeas.obtenerIdeaPorId(this.ideaId);
      if (idea) {
        this.formularioIdea.patchValue(idea);
      }
    }
  }

  actualizarIdea(): void {
    if (this.formularioIdea.valid && this.ideaId !== undefined) {
      this.servicioIdeas.actualizarIdea({ id: this.ideaId, ...this.formularioIdea.value });
      this.enrutador.navigate(['/']);
    }
  }

  cancelar(): void {
    this.enrutador.navigate(['/']);
  }
}
