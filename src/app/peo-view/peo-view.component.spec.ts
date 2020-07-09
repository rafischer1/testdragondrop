import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PeoViewComponent } from "./peo-view.component";

describe("PeoViewComponent", () => {
  let component: PeoViewComponent;
  let fixture: ComponentFixture<PeoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PeoViewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
