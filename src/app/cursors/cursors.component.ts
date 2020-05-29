import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cursors",
  templateUrl: "./cursors.component.html",
  styleUrls: ["./cursors.component.css"],
})
export class CursorsComponent implements OnInit {
  selected = "";
  sideNavOpen: boolean;
  constructor() {}

  ngOnInit() {
    this.sideNavOpen = false;
  }

  sideNaveOpenToggle() {
    this.sideNavOpen ? (this.sideNavOpen = false) : (this.sideNavOpen = true);
  }

  cursorChange(type: string) {
    switch (type) {
      case "create":
        this.selected = "create";
        console.log("create cursor");
        break;
      case "text_fields":
        this.selected = "text_fields";
        console.log("text field cursor");
        break;
      case "brush":
        this.selected = "brush";
        console.log("brush cursor");
        break;
      case "palette":
        this.selected = "palette";
        console.log("clear cursor");
        break;
      case "format_clear":
        this.selected = "format_clear";
        console.log("clear cursor");
        break;
      default:
        console.log("pointer cursor");
    }
  }
}
