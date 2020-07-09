import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CardComponent } from "./card.component";
import { MatCard, MatCardModule, MatCardTitle } from "@angular/material";

describe("CardComponent", () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent, MatCard, MatCardTitle],
      imports: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
