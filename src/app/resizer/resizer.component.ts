import { Component, OnInit } from "@angular/core";
import { PlanDesign } from "../list/list.component";
import { HelpersService } from "../services/helpers.service";

@Component({
  selector: "app-resizer",
  templateUrl: "./resizer.component.html",
  styleUrls: ["./resizer.component.css"],
})
export class ResizerComponent implements OnInit {
  cards: PlanDesign[] = [
    {
      name: "Humana EPO-3500",
      rates: this.help.rates(),
      renewalDate: "1/1/21",
      id: 1,
      locked: false,
    },
    {
      name: "Aetna NY-2000-XYZ",
      rates: this.help.rates(),
      renewalDate: "1/1/21",
      id: 2,
      locked: false,
    },
    {
      name: "Anthem Gold 5500",
      rates: this.help.rates(),
      renewalDate: "1/1/21",
      id: 3,
      locked: false,
    },
  ];
  constructor(private help: HelpersService) {}

  ngOnInit() {}

  lock(id: number) {
    return this.cards.forEach((card) => {
      if (card.id === id) {
        card.locked = !card.locked;
      }
    });
  }
}
