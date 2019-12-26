import { Component, Output, EventEmitter } from "@angular/core";
import { DataTableOptions } from "./api/datatable-options";
import { DipendentiService } from "src/core/service/dipendenti.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(public dipendente: DipendentiService) {}

  @Output() resetSelectionListener: EventEmitter<any> = new EventEmitter<any>();

  options: DataTableOptions = {
    colsOptions: [
      {
        label: "Nome",
        name: "nome"
      },
      {
        label: "Regione",
        name: "regione"
      },
      {
        label: "Sesso",
        name: "sex"
      }
    ]
  };

  currentIndex: number;
  public isVisible: boolean = true;
  public title: string = "timesheet";
  // public listanomi: string[] = ["gesu", "giuseppe", "maria"];

  currentSelection = [];
  listaOutput: any[] = [];

  toggle() {
    this.isVisible = !this.isVisible;
  }

  select(input: any, index: number) {
    this.currentSelection[index] = input;
  }

  resetSelectionEmitter() {
    this.resetSelectionListener.emit(null);
  }
}
