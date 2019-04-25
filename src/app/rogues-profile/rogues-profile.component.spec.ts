import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoguesProfileComponent } from './rogues-profile.component';

describe('RoguesProfileComponent', () => {
  let component: RoguesProfileComponent;
  let fixture: ComponentFixture<RoguesProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoguesProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoguesProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
