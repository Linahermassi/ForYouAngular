import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateurAgriInssuranceComponent } from './simulateur-agri-inssurance.component';

describe('SimulateurAgriInssuranceComponent', () => {
  let component: SimulateurAgriInssuranceComponent;
  let fixture: ComponentFixture<SimulateurAgriInssuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulateurAgriInssuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulateurAgriInssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
