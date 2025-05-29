import { Routes } from '@angular/router';
import { ListaIdeasComponent } from './componentes/lista-ideas.component/lista-ideas.component';
import { CrearIdeaComponent } from './componentes/crear-idea.component/crear-idea.component';
import { EditarIdeaComponent } from './componentes/editar-idea.component/editar-idea.component';
import { VerIdeaComponent } from './componentes/ver-idea.component/ver-idea.component';

export const routes: Routes = [
  { path: '', component: ListaIdeasComponent },
  { path: 'crear-idea', component: CrearIdeaComponent },
  { path: 'editar-idea/:id', component: EditarIdeaComponent },
  { path: 'ver-idea/:id', component: VerIdeaComponent },
  { path: '**', redirectTo: '' }
];
