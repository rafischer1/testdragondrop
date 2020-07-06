import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SnackButtonComponent } from "./snack-button.component";

describe("SnackButtonComponent", () => {
  let component: SnackButtonComponent;
  let fixture: ComponentFixture<SnackButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SnackButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
