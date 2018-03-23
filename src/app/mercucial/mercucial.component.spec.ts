import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MercucialComponent } from './mercucial.component';

describe('MercucialComponent', () => {
  let component: MercucialComponent;
  let fixture: ComponentFixture<MercucialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MercucialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MercucialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
