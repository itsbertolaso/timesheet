import { Component, Output, EventEmitter } from "@angular/core";
import { DataTableOptions } from "./api/datatable-options";
import { DipendentiService } from "src/core/service/dipendenti.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor() {}
  public title: string = "timesheet";
}
