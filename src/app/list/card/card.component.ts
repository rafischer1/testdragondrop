import { Component, Input, OnInit } from "@angular/core";
import { PlanDesign } from "../list.component";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() plan: PlanDesign;
  constructor() {}

  ngOnInit() {}
}
