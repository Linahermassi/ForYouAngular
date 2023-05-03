import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCreditFrontComponent } from './add-credit-front.component';

describe('AddCreditFrontComponent', () => {
  let component: AddCreditFrontComponent;
  let fixture: ComponentFixture<AddCreditFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCreditFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCreditFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
