import { Component, OnInit } from "@angular/core";

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
  constructor() {}

  ngOnInit() {}

  genSQL(features: Feature[], tenantId: string) {
    this.tenantFeatures = [];
    features.forEach((f) => {
      this.tenantFeatures.push(
        `INSERT INTO api_schema.features_tenant_map ("key", tenant_id, enabled, locked) VALUES ('${f.key}', ${tenantId}, ${f.enabled}, ${f.locked};`
      );
    });
    return this.tenantFeatures;
  }

  genAllFeatures(features: Feature[]) {
    this.featuresArr = [];
    features.forEach((f) => {
      this.featuresArr.push(
        `INSERT INTO api_schema.features ("key") VALUES ('${f.key}');`
      );
    });
    return this.featuresArr;
  }
}
