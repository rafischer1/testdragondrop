import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { PromptComponent } from "./prompt.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import {FormsModule, NgControl, NgForm} from "@angular/forms";

describe("Prompt Component", () => {
  let component: PromptComponent;
  let fixture: ComponentFixture<PromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PromptComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule],
      providers: [NgControl],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
