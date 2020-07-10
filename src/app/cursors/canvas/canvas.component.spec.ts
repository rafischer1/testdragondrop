import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CanvasComponent } from "./canvas.component";
import { MatChip, MatChipsModule, MatIconModule } from "@angular/material";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("CanvasComponent", () => {
  let component: CanvasComponent;
  let fixture: ComponentFixture<CanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [CanvasComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
