import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";

export class PlanDesign {
  name: string;
  renewalDate: string;
  hdhp: boolean;
}

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  list: PlanDesign[] = [
    { name: "Humana EPO-3500", hdhp: true, renewalDate: "1/1/21" },
    { name: "Aetna NY-2000-XYZ", hdhp: true, renewalDate: "1/1/21" },
    { name: "Anthem Gold 5500", hdhp: true, renewalDate: "1/1/21" },
    { name: "Aetna NY-HDHP-4500", hdhp: true, renewalDate: "1/1/21" },
  ];

  finalList: PlanDesign[] = [
    { name: "Humana PPO-5000", hdhp: true, renewalDate: "1/1/21" },
  ];

  constructor() {}

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
      { name: "Humana EPO-3500", hdhp: true, renewalDate: "1/1/21" },
      { name: "Aetna NY-2000-XYZ", hdhp: true, renewalDate: "1/1/21" },
      { name: "Anthem Gold 5500", hdhp: true, renewalDate: "1/1/21" },
      { name: "Aetna NY-HDHP-4500", hdhp: true, renewalDate: "1/1/21" },
    ];

    this.finalList = [
      { name: "Humana PPO-5000", hdhp: true, renewalDate: "1/1/21" },
    ];
  }
}
