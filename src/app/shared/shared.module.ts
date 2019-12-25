import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DatatableComponent } from "./datatable/datatable.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from "@angular/router";
@NgModule({
  declarations: [DatatableComponent, NavbarComponent],
  exports: [DatatableComponent, NavbarComponent],
  imports: [CommonModule, RouterModule]
})
export class SharedModule {}
