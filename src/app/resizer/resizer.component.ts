import { Component, OnInit } from "@angular/core";
import { PlanDesign } from "../list/list.component";
import { HelpersService } from "../services/helpers.service";

@Component({
  selector: "app-resizer",
  templateUrl: "./resizer.component.html",
  styleUrls: ["./resizer.component.css"],
})
export class ResizerComponent implements OnInit {
  cards: PlanDesign[] = [
    {
      name: "Humana EPO-3500",
      rates: {
        ec: this.help.random(),
        ee: this.help.random(),
        es: this.help.random(),
        fam: this.help.random(),
      },
      renewalDate: "1/1/21",
    },
    {
      name: "Aetna NY-2000-XYZ",
      rates: {
        ec: this.help.random(),
        ee: this.help.random(),
        es: this.help.random(),
        fam: this.help.random(),
      },
      renewalDate: "1/1/21",
    },
    {
      name: "Anthem Gold 5500",
      rates: {
        ec: this.help.random(),
        ee: this.help.random(),
        es: this.help.random(),
        fam: this.help.random(),
      },
      renewalDate: "1/1/21",
    },
  ];
  constructor(private help: HelpersService) {}

  ngOnInit() {}
}
