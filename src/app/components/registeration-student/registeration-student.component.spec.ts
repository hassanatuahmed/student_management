import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterationStudentComponent } from './registeration-student.component';

describe('RegisterationStudentComponent', () => {
  let component: RegisterationStudentComponent;
  let fixture: ComponentFixture<RegisterationStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterationStudentComponent]
    });
    fixture = TestBed.createComponent(RegisterationStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
