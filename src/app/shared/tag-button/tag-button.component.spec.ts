import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { TagButtonComponent } from "./tag-button.component";
import {MatSnackBar, MatSnackBarModule} from "@angular/material";

describe("TagButtonComponent", () => {
  let component: TagButtonComponent;
  let fixture: ComponentFixture<TagButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [TagButtonComponent],
      providers: [MatSnackBarModule],
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
