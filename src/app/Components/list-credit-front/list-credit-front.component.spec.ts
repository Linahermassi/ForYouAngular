import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCreditFrontComponent } from './list-credit-front.component';

describe('ListCreditFrontComponent', () => {
  let component: ListCreditFrontComponent;
  let fixture: ComponentFixture<ListCreditFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCreditFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCreditFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
