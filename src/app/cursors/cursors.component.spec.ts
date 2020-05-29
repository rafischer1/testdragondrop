import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursorsComponent } from './cursors.component';

describe('CursorsComponent', () => {
  let component: CursorsComponent;
  let fixture: ComponentFixture<CursorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
