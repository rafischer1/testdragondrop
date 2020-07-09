import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ListComponent } from "./list.component";
import {MatCardModule} from "@angular/material";
import {CdkDropList} from "@angular/cdk/drag-drop";

describe("ListComponent", () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [MatCardModule, CdkDropList]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
