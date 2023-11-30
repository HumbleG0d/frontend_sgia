import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinmuebleComponent } from './listinmueble.component';

describe('ListinmuebleComponent', () => {
  let component: ListinmuebleComponent;
  let fixture: ComponentFixture<ListinmuebleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListinmuebleComponent]
    });
    fixture = TestBed.createComponent(ListinmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
