import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCreditComponent } from './status-credit.component';

describe('StatusCreditComponent', () => {
  let component: StatusCreditComponent;
  let fixture: ComponentFixture<StatusCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusCreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
