import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PeoViewComponent } from "./peo-view.component";
import { MatButtonModule, MatIconModule } from "@angular/material";
import {CircleButtonComponent} from "../shared/circle-button/circle-button.component";
import {TagButtonComponent} from "../shared/tag-button/tag-button.component";

describe("PeoViewComponent", () => {
  let component: PeoViewComponent;
  let fixture: ComponentFixture<PeoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule, MatButtonModule],
      declarations: [PeoViewComponent, CircleButtonComponent, TagButtonComponent],
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
