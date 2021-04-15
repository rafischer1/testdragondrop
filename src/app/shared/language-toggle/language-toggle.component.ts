import { Component, OnInit } from "@angular/core";
import { TranslocoService } from "@ngneat/transloco";

@Component({
  selector: "app-language-toggle",
  templateUrl: "./language-toggle.component.html",
  styleUrls: ["./language-toggle.component.css"],
})
export class LanguageToggleComponent implements OnInit {
  activeLang: string;
  constructor(private transloco: TranslocoService) {}

  ngOnInit() {
    this.activeLang = this.transloco.getActiveLang();
  }

  setLanguage(lang: string) {
    this.transloco.setActiveLang(lang);
    this.activeLang = lang;
  }
}
