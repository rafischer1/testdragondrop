import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ResizerComponent } from "./resizer.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("ResizerComponent", () => {
  let component: ResizerComponent;
  let fixture: ComponentFixture<ResizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ResizerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
