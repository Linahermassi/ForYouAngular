import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinscriComponent } from './listinscri.component';

describe('ListinscriComponent', () => {
  let component: ListinscriComponent;
  let fixture: ComponentFixture<ListinscriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListinscriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListinscriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
