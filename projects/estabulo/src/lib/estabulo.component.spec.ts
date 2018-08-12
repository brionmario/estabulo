import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabuloComponent } from './estabulo.component';

describe('EstabuloComponent', () => {
  let component: EstabuloComponent;
  let fixture: ComponentFixture<EstabuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstabuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
