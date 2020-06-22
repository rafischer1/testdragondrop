import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { HelpersService } from "../services/helpers.service";
import { PlansService } from "../services/plans.service";

export class PlanDesign {
  name: string;
  renewalDate: string;
  rates: Rates;
  id: number;
  locked: boolean;
}

export class Rates {
  ec: number;
  ee: number;
  es: number;
  fam: number;
}

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  list: PlanDesign[];
  finalList: PlanDesign[] = [
    {
      name: "Humana PPO-5000",
      rates: this.help.rates(),
      renewalDate: "1/1/21",
      id: 5,
      locked: false,
    },
  ];

  constructor(
    private help: HelpersService,
    private plansService: PlansService
  ) {}

  ngOnInit() {
    this.list = this.plansService.getAll();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  saveList() {
    console.log("You saved a list 🌇");
  }

  reset() {
    this.list = this.plansService.getAll();

    this.finalList = [
      {
        name: "Humana PPO-5000",
        rates: this.help.rates(),
        renewalDate: "1/1/21",
        id: 5,
        locked: false,
      },
    ];
  }
}
