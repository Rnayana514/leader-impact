import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter10Component } from './Chapter10.component';

describe('Chapter10Component', () => {
  let component: Chapter10Component;
  let fixture: ComponentFixture<Chapter10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
