import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerIdeaComponent } from './ver-idea.component';

describe('VerIdeaComponent', () => {
  let component: VerIdeaComponent;
  let fixture: ComponentFixture<VerIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerIdeaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
