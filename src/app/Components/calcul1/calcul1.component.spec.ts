import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calcul1Component } from './calcul1.component';

describe('Calcul1Component', () => {
  let component: Calcul1Component;
  let fixture: ComponentFixture<Calcul1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Calcul1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calcul1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
