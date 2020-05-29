import { Component, OnInit } from "@angular/core";
import { HelpersService } from "../services/helpers.service";

@Component({
  selector: "app-cursors",
  templateUrl: "./cursors.component.html",
  styleUrls: ["./cursors.component.css"],
})
export class CursorsComponent implements OnInit {
  selected = "";
  sideNavOpen: boolean;
  buttons: string[] = [
    "create",
    "text_fields",
    "brush",
    "palette",
    "format_clear",
  ];
  constructor(private help: HelpersService) {}

  ngOnInit() {
    this.sideNavOpen = false;
    this.selected = "format_clear";
    this.setCursor();
  }

  sideNaveOpenToggle = () =>
    this.sideNavOpen ? (this.sideNavOpen = false) : (this.sideNavOpen = true);

  cursorChange(type: string) {
    switch (type) {
      case "create":
        this.selected = "create";
        this.setCursor();
        break;
      case "text_fields":
        this.selected = "text_fields";
        this.setCursor();
        break;
      case "brush":
        this.selected = "brush";
        this.setCursor();
        break;
      case "palette":
        this.selected = "palette";
        this.setCursor();
        break;
      case "format_clear":
        this.selected = "format_clear";
        this.setCursor();
        break;
      default:
        this.setCursor();
    }
  }

  setCursor = () => this.help.setCursor(this.selected);

  cursorMove(event: MouseEvent) {
    // console.log(event);
  }
}
