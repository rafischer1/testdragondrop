import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-peo-view",
  templateUrl: "./peo-view.component.html",
  styleUrls: ["./peo-view.component.css"],
})
export class PeoViewComponent implements OnInit {
  plans = [1, 2, 3, 4, 5];
  constructor() {}

  ngOnInit() {}

  addTag() {
    const tagName = prompt("NAME OF TAG:");
    if (tagName !== "") {
      setTimeout(() => {
        alert("TAG TO BE MADE IN THE FUTURE: " + tagName.toUpperCase());
      }, 500);
    }
  }

  addColor() {
   alert("Create color selection to give hex code....")
  }
}
