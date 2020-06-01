import { Component, OnInit } from "@angular/core";
import { HelpersService } from "../services/helpers.service";

@Component({
  selector: "app-cursors",
  templateUrl: "./cursors.component.html",
  styleUrls: ["./cursors.component.css"],
})
export class CursorsComponent implements OnInit {
  selected = "";
  theme = "default";
  text: string;
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
    this.setCursor("");
  }

  sideNavOpenToggle = () =>
    this.sideNavOpen ? (this.sideNavOpen = false) : (this.sideNavOpen = true);

  cursorChange(type: string) {
    this.selected = type;
    switch (type) {
      case "create":
        this.setCursor("create");
        break;
      case "text_fields":
        this.setCursor("text_fields");
        break;
      case "brush":
        this.setCursor("brush");
        break;
      case "palette":
        this.setCursor("palette");
        break;
      case "format_clear":
        this.setCursor("format_clear");
        break;
      default:
        this.setCursor("");
    }
  }

  setCursor = (cursor: string) => {
    this.help.setCursor(cursor);
  };

  cursorMove(event: MouseEvent) {
    // console.log(event);
  }

  saveText() {
    console.log(this.text);
  }

  setTheme = (type: string) => (this.theme = type);
}
