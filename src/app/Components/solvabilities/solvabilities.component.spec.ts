import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolvabilitiesComponent } from './solvabilities.component';

describe('SolvabilitiesComponent', () => {
  let component: SolvabilitiesComponent;
  let fixture: ComponentFixture<SolvabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolvabilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolvabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
