import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IdeaService } from '../../servicios/idea.service/idea.service';

@Component({
  selector: 'app-crear-idea',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crear-idea.component.html',
  styleUrls: ['./crear-idea.component.css']
})
export class CrearIdeaComponent {
  formularioIdea: FormGroup;
  estados = ['Borrador', 'Validando', 'Descartada'];
  categorias = ['tecnología', 'salud', 'educación'];

  constructor(
    private fb: FormBuilder,
    private servicioIdeas: IdeaService,
    private enrutador: Router
  ) {
    this.formularioIdea = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoria: ['', Validators.required],
      estado: ['Borrador', Validators.required]
    });
  }

  alEnviar(): void {
    if (this.formularioIdea.valid) {
      this.servicioIdeas.agregarIdea(this.formularioIdea.value);
      this.enrutador.navigate(['/']);
    }
  }
}
