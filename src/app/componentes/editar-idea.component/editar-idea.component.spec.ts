import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarIdeaComponent } from './editar-idea.component';

describe('EditarIdeaComponent', () => {
  let component: EditarIdeaComponent;
  let fixture: ComponentFixture<EditarIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarIdeaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
