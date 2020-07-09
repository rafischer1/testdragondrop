import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SnackButtonComponent } from "./snack-button.component";
import { MatButtonModule, MatSnackBarModule } from "@angular/material";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { MatSnackBar } from "@angular/material/typings/esm5/snack-bar";

describe("SnackButtonComponent", () => {
  let component: SnackButtonComponent;
  let fixture: ComponentFixture<SnackButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [MatButtonModule],
      declarations: [SnackButtonComponent],
      providers: [],
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
