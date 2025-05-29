import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaIdeasComponent } from './lista-ideas.component';

describe('ListarIdeaComponent', () => {
  let component: ListaIdeasComponent;
  let fixture: ComponentFixture<ListaIdeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaIdeasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
