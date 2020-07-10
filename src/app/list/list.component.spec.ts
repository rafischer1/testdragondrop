import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ListComponent } from "./list.component";
import {MatCardModule, MatList, MatRipple, MatRippleModule, MatSnackBar, MatSnackBarModule} from "@angular/material";
import { CdkDropList } from "@angular/cdk/drag-drop";
import { CardComponent } from "./card/card.component";
import { addProviderToModule } from "@datorama/akita/schematics/ng-add/utils";
import {SnackButtonComponent} from "../shared/snack-button/snack-button.component";
import {Overlay} from "@angular/cdk/typings/overlay";

describe("ListComponent", () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListComponent,
        CdkDropList,
        CardComponent,
        MatList,
        SnackButtonComponent
      ],
      imports: [MatCardModule, MatSnackBarModule, MatRippleModule],
      providers: []
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
