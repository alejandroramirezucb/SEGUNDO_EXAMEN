import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarIdeaComponent } from './eliminar-idea.component';

describe('EliminarIdeaComponent', () => {
  let component: EliminarIdeaComponent;
  let fixture: ComponentFixture<EliminarIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarIdeaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
