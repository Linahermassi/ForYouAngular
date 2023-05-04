import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifReclamationComponent } from './modif-reclamation.component';

describe('ModifReclamationComponent', () => {
  let component: ModifReclamationComponent;
  let fixture: ComponentFixture<ModifReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifReclamationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
