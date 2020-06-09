import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { HelpersService } from "../../services/helpers.service";

@Component({
  selector: "app-cursor-button",
  templateUrl: "./cursor-button.component.html",
  styleUrls: ["./cursor-button.component.css"],
})
export class CursorButtonComponent implements OnInit {
  @Input() type: string;
  @Input() selected: boolean;
  @Output() cursorEmit: EventEmitter<string> = new EventEmitter<string>();

  constructor(private help: HelpersService) {}

  ngOnInit() {
    this.setCursor();
  }

  emitCursorChange = () => this.cursorEmit.emit(this.type);

  setCursor = () => this.help.setCursor(this.type);
}
