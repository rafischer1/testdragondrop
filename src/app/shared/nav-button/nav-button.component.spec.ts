import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NavButtonComponent } from "./nav-button.component";
import { MatIconModule } from "@angular/material";

describe("NavButtonComponent", () => {
  let component: NavButtonComponent;
  let fixture: ComponentFixture<NavButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [NavButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
