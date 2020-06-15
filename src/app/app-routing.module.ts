import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { ResizerComponent } from "./resizer/resizer.component";
import { CursorsComponent } from "./cursors/cursors.component";
import {ProposalLoginComponent} from "./proposal-login/proposal-login.component";

const routes: Routes = [
  { path: "", component: ListComponent },
  { path: "resize", component: ResizerComponent },
  { path: "list", component: ListComponent },
  { path: "cursors", component: CursorsComponent },
  { path: "login", component: ProposalLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
