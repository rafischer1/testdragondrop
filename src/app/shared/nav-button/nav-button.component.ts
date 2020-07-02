import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-nav-button",
  templateUrl: "./nav-button.component.html",
  styleUrls: ["./nav-button.component.css"],
})
export class NavButtonComponent implements OnInit {
  @Input() type: string;
  @Output() navEmit: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  nav = (direction: string) => this.navEmit.emit(direction);
}
