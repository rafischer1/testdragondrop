import { Component, OnChanges, OnInit } from "@angular/core";
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
  ripple: "rgba(255, 243, 173, 0.65)";
  list: PlanDesign[] = [
    {
      name: "Humana EPO-3500",
      rates: {
        ec: this.help.random(),
        ee: this.help.random(),
        es: this.help.random(),
        fam: this.help.random(),
      },
      renewalDate: "1/1/21",
    },
    {
      name: "Aetna NY-2000-XYZ",
      rates: {
        ec: this.help.random(),
        ee: this.help.random(),
        es: this.help.random(),
        fam: this.help.random(),
      },
      renewalDate: "1/1/21",
    },
    {
      name: "Anthem Gold 5500",
      rates: {
        ec: this.help.random(),
        ee: this.help.random(),
        es: this.help.random(),
        fam: this.help.random(),
      },
      renewalDate: "1/1/21",
    },
    {
      name: "Aetna NY-HDHP-4500",
      rates: {
        ec: this.help.random(),
        ee: this.help.random(),
        es: this.help.random(),
        fam: this.help.random(),
      },
      renewalDate: "1/1/21",
    },
  ];

  finalList: PlanDesign[] = [
    {
      name: "Humana PPO-5000",
      rates: {
        ec: this.help.random(),
        ee: this.help.random(),
        es: this.help.random(),
        fam: this.help.random(),
      },
      renewalDate: "1/1/21",
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
        rates: {
          ec: this.help.random(),
          ee: this.help.random(),
          es: this.help.random(),
          fam: this.help.random(),
        },
        renewalDate: "1/1/21",
      },
      {
        name: "Aetna NY-2000-XYZ",
        rates: {
          ec: this.help.random(),
          ee: this.help.random(),
          es: this.help.random(),
          fam: this.help.random(),
        },
        renewalDate: "1/1/21",
      },
      {
        name: "Anthem Gold 5500",
        rates: {
          ec: this.help.random(),
          ee: this.help.random(),
          es: this.help.random(),
          fam: this.help.random(),
        },
        renewalDate: "1/1/21",
      },
      {
        name: "Aetna NY-HDHP-4500",
        rates: {
          ec: this.help.random(),
          ee: this.help.random(),
          es: this.help.random(),
          fam: this.help.random(),
        },
        renewalDate: "1/1/21",
      },
    ];

    this.finalList = [
      {
        name: "Humana PPO-5000",
        rates: {
          ec: this.help.random(),
          ee: this.help.random(),
          es: this.help.random(),
          fam: this.help.random(),
        },
        renewalDate: "1/1/21",
      },
    ];
  }
}
