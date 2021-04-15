import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: "app-language-button",
  templateUrl: "./language-button.component.html",
  styleUrls: ["./language-button.component.css"],
})
export class LanguageButtonComponent implements OnInit {
  @Input() icon: string;
  @Input() active: boolean;
  @Output() set: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}
}
