import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { ResizerComponent } from "./resizer/resizer.component";
import { CursorsComponent } from "./cursors/cursors.component";
import { ProposalLoginComponent } from "./proposal/proposal-login/proposal-login.component";
import { ProposalViewComponent } from "./proposal/proposal-view/proposal-view.component";
import { ProposalPlansComponent } from "./proposal/proposal-plans/proposal-plans.component";
import { ProposalRatesComponent } from "./proposal/proposal-rates/proposal-rates.component";

const routes: Routes = [
  { path: "", component: ListComponent },
  { path: "resize", component: ResizerComponent },
  { path: "list", component: ListComponent },
  { path: "cursors", component: CursorsComponent },
  { path: "login", component: ProposalLoginComponent },
  { path: "proposal", component: ProposalViewComponent },
  { path: "plans", component: ProposalPlansComponent },
  { path: "rates", component: ProposalRatesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
