import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursorButtonComponent } from './cursor-button.component';

describe('CursorButtonComponent', () => {
  let component: CursorButtonComponent;
  let fixture: ComponentFixture<CursorButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursorButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursorButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
