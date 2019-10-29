import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformsEditComponent } from './platforms-edit.component';

describe('PlatformsEditComponent', () => {
  let component: PlatformsEditComponent;
  let fixture: ComponentFixture<PlatformsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
