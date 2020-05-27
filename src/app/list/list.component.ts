import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  list: any[] = [
    "Humana EPO-3500",
    "Aetna NY-2000-XYZ",
    "Anthem Gold 5500",
    "Aetna NY-HDHP-4500",
  ];

  finalList: any[] = ["Humana PPO-5000"];

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
      "Humana EPO-3500",
      "Aetna NY-2000-XYZ",
      "Anthem Gold 5500",
      "Aetna NY-HDHP-4500",
    ];

    this.finalList = ["Humana PPO-5000"];
  }
}
