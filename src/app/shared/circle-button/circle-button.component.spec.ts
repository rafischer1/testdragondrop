import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CircleButtonComponent } from "./circle-button.component";
import { MatButtonModule, MatIconModule } from "@angular/material";

describe("CircleButtonComponent", () => {
  let component: CircleButtonComponent;
  let fixture: ComponentFixture<CircleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule, MatButtonModule],
      declarations: [CircleButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
