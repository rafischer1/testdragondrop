import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { HelpersService } from "../services/helpers.service";

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
  list: PlanDesign[] = [
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
    {
      name: "Aetna NY-HDHP-4500",
      rates: this.help.rates(),
      renewalDate: "1/1/21",
      id: 4,
      locked: false,
    },
  ];

  finalList: PlanDesign[] = [
    {
      name: "Humana PPO-5000",
      rates: this.help.rates(),
      renewalDate: "1/1/21",
      id: 5,
      locked: false,
    },
  ];

  constructor(private help: HelpersService) {}

  ngOnInit() {}

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
    this.list = [
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
      {
        name: "Aetna NY-HDHP-4500",
        rates: this.help.rates(),
        renewalDate: "1/1/21",
        id: 4,
        locked: false,
      },
    ];

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
