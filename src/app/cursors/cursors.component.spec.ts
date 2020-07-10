import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CursorsComponent } from "./cursors.component";
import { CursorButtonComponent } from "./cursor-button/cursor-button.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";

describe("CursorsComponent", () => {
  let component: CursorsComponent;
  let fixture: ComponentFixture<CursorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CursorsComponent, CursorButtonComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
