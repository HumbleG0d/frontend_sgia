import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateinmuebleComponent } from './updateinmueble.component';

describe('UpdateinmuebleComponent', () => {
  let component: UpdateinmuebleComponent;
  let fixture: ComponentFixture<UpdateinmuebleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateinmuebleComponent]
    });
    fixture = TestBed.createComponent(UpdateinmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
