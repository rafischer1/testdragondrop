import { Injectable } from "@angular/core";
import * as jsPDF from "jspdf";
import { PlansService } from "./plans.service";

@Injectable({
  providedIn: "root",
})
export class PdfService {
  constructor(private plansService: PlansService) {}

  toPdf(html: HTMLElement) {
    const doc = new jsPDF();
    doc.setFont("helvetica", "normal");
    let i = 0;
    this.plansService.getAll().forEach((plan) => {
      const x = 20;
      let y = 20;
      if (i > 0) {
        y = y + 30 * i;
      } else if (i > 2) {
        y = y + 30 * 2;
      }
      doc.setDrawColor(0);
      doc.setFillColor(255, 0, 0);
      doc.roundedRect(x, y, 100, 20, 1, 1);
      doc.text(
        x + 5,
        y + 10,
        `${plan.name} \n EE: ${plan.rates.ee} ES: ${plan.rates.es} EC: ${plan.rates.ee} FAM: ${plan.rates.fam}`
      );
      i++;
    });
    doc.fromHTML(html);

    doc.save("test.pdf");
  }
}
