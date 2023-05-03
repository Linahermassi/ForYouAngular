import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCreditComponent } from './modifier-credit.component';

describe('ModifierCreditComponent', () => {
  let component: ModifierCreditComponent;
  let fixture: ComponentFixture<ModifierCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierCreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
