import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoguesGalleryComponent } from './rogues-gallery.component';

describe('RoguesGalleryComponent', () => {
  let component: RoguesGalleryComponent;
  let fixture: ComponentFixture<RoguesGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoguesGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoguesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
