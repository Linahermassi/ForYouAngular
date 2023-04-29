import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeventfrontComponent } from './listeventfront.component';

describe('ListeventfrontComponent', () => {
  let component: ListeventfrontComponent;
  let fixture: ComponentFixture<ListeventfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeventfrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeventfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
