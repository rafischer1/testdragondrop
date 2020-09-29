import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

export class Feature {
  key: string;
  enabled: boolean;
  locked: boolean;
}

@Component({
  selector: "app-sql-generator",
  templateUrl: "./sql-generator.component.html",
  styleUrls: ["./sql-generator.component.css"],
})
export class SqlGeneratorComponent implements OnInit {
  tenantFeatures: string[];
  featuresArr: string[];

  tenantId = new FormControl("");
  tenantFeaturesFormControl = new FormControl([]);
  tenantFeaturesDisabled: boolean;
  tenantForm = new FormGroup({
    test: new FormControl(""),
  });

  allFeatures = new FormControl([]);
  featuresForm = new FormGroup({
    test: new FormControl(""),
  });

  constructor() {}

  ngOnInit() {
    this.tenantFeaturesDisabled = true;
  }

  genSQL(ev: MouseEvent) {
    ev.preventDefault();
    console.log(
      "GENSQL:",
      this.tenantId.value,
      this.tenantFeaturesFormControl.value
    );
    const feats = this.tenantFeaturesFormControl.value.split(",");
    const id = this.tenantId.value;
    this.tenantFeatures = [];
    feats.value.forEach((f) => {
      this.tenantFeatures.push(
        `INSERT INTO api_schema.features_tenant_map ("key", tenant_id, enabled, locked) VALUES ('${f.key}', ${id}, ${f.enabled}, ${f.locked};`
      );
    });
    return this.tenantFeatures;
  }

  genAllFeatures() {
    console.log("GEN FEATS:", this.featuresForm.controls.allFeatures.value);
    const feats = this.allFeatures.value;
    this.featuresArr = [];
    feats.value.forEach((f) => {
      this.featuresArr.push(
        `INSERT INTO api_schema.features ("key") VALUES ('${f.key}');`
      );
    });
    return this.featuresArr;
  }

  areTenantFeaturesDisabled(): boolean {
    return !!(
      this.tenantId.value.length > 0 &&
      this.tenantFeaturesFormControl.value.length > 0
    );
  }

  areFeaturesDisabled(): boolean {
    return this.allFeatures.value.length > 0;
  }
}
