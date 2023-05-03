import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetfeedbackComponent } from './setfeedback.component';

describe('SetfeedbackComponent', () => {
  let component: SetfeedbackComponent;
  let fixture: ComponentFixture<SetfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetfeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
