import { Component, OnInit } from "@angular/core";
import { PlanDesign } from "../list/list.component";
import { PlansService } from "../services/plans.service";

@Component({
  selector: "app-resizer",
  templateUrl: "./resizer.component.html",
  styleUrls: ["./resizer.component.css"],
})
export class ResizerComponent implements OnInit {
  cards: PlanDesign[];
  constructor(private plansService: PlansService) {}

  ngOnInit() {
    this.cards = this.plansService.getThree();
  }

  lock(id: number) {
    return this.cards.forEach((card) => {
      if (card.id === id) {
        card.locked = !card.locked;
      }
    });
  }
}
