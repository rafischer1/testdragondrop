import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HelpersService {
  constructor() {}

  random = () => Math.ceil(Math.random() * 1000);

  setCursor(type: string) {
    switch (type) {
      case "create":
        return "crosshair";
      case "text_fields":
        return "text";
      case "brush":
        return "cell";
      case "palette":
        return "context-menu";
      case "format_clear":
        return "auto";
      default:
        return "auto";
    }
  }
}
