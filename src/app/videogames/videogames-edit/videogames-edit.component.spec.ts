import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogamesEditComponent } from './videogames-edit.component';

describe('VideogamesEditComponent', () => {
  let component: VideogamesEditComponent;
  let fixture: ComponentFixture<VideogamesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideogamesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideogamesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
