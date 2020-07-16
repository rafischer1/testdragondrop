import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoSectionComponent } from './peo-section.component';

describe('PeoSectionComponent', () => {
  let component: PeoSectionComponent;
  let fixture: ComponentFixture<PeoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
