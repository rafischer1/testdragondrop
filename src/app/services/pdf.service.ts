import { Injectable } from "@angular/core";
import * as jsPDF from "jspdf";
import { PlansService } from "./plans.service";
import html2canvas from "html2canvas";
import { PlanDesign } from "../list/list.component";

@Injectable({
  providedIn: "root",
})
export class PdfService {
  constructor(private plansService: PlansService) {}

  toPdf(html: HTMLCanvasElement) {
    // document.querySelector("toPdf") try this for "body")
    const imgData = html.toDataURL("image/png");
    imgData.small();
    const doc = new jsPDF("l", "mm", "a4", false);
    doc.addImage(imgData, "PNG", 0, 0, 297, 210);
    doc.save();
  }

  pdfDownloadToCanvas(html: HTMLElement) {
    html2canvas(html, {
      backgroundColor: "#333",
      scale: window.devicePixelRatio,
      allowTaint: false,
    }).then((canvas) => {
      this.toPdf(canvas);
    });
  }

  buildMeAPdf(plans: PlanDesign[]) {
    const doc = new jsPDF("l", "mm", "a4", false);
    doc.setDrawColor(51, 51, 51);
    doc.text("Plans to Offer", 15, 15);
    let i = 0;
    plans.forEach((plan) => {
      const x = 20;
      let y = 20;
      if (i > 0) {
        y = y + 30 * i;
      } else if (i > 2) {
        y = y + 30 * 2;
      }
      doc.setFillColor(51, 51, 51);
      doc.roundedRect(x, y, 100, 20, 1, 1);
      doc.text(
        x + 5,
        y + 10,
        `${plan.name} \n EE: ${plan.rates.ee} ES: ${plan.rates.es} EC: ${plan.rates.ee} FAM: ${plan.rates.fam}`
      );
      i++;
    });
    doc.save();
  }
}
