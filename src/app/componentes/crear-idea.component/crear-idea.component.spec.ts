import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearIdeaComponent } from './crear-idea.component';

describe('CrearIdeaComponent', () => {
  let component: CrearIdeaComponent;
  let fixture: ComponentFixture<CrearIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearIdeaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
