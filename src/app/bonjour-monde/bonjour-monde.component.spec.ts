import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonjourMondeComponent } from './bonjour-monde.component';

describe('BonjourMondeComponent', () => {
  let component: BonjourMondeComponent;
  let fixture: ComponentFixture<BonjourMondeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonjourMondeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonjourMondeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
