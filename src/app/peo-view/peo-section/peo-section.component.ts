import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Tag } from "../../shared/tag-button/tag-button.component";

@Component({
  selector: "app-peo-section",
  templateUrl: "./peo-section.component.html",
  styleUrls: ["./peo-section.component.css"],
})
export class PeoSectionComponent implements OnInit {
  @Input() plans: any[];
  @Input() title: string;
  @Input() tag: Tag;
  @Input() headerColor: string;
  @Input() addButton: boolean;

  @Output() planEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() benefitEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  viewPlan(plan: any, section: string) {
    this.planEmitter.emit({ plan, section });
  }

  benefitActionEmit() {
    this.benefitEmitter.emit(true);
  }
}
