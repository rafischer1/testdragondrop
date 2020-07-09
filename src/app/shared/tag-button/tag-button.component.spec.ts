import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TagButtonComponent } from "./tag-button.component";
import {MatRippleModule} from "@angular/material";

describe("TagButtonComponent", () => {
  let component: TagButtonComponent;
  let fixture: ComponentFixture<TagButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatRippleModule],
      declarations: [TagButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
