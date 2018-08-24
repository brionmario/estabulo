import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabstripComponent } from './tabstrip.component';

describe('TabstripComponent', () => {
  let component: TabstripComponent;
  let fixture: ComponentFixture<TabstripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabstripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabstripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
