import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcreditComponent } from './list-credit.component';

describe('ListCreditComponent', () => {
  let component: ListcreditComponent;
  let fixture: ComponentFixture<ListcreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
