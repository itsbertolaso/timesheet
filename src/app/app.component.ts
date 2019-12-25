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
  sogg = [
    {
      id: 1,
      nome: "marco",
      regione: "veneto",
      sex: "m"
    },
    { id: 2, nome: "Mario", regione: "lazio", sex: "f" },
    { id: 3, nome: "Mario", regione: "veneto", sex: "f" },
    { id: 4, nome: "piero", regione: "campania", sex: "m" }
  ];
  sogg2 = [
    {
      nome: "Mario",
      regione: "veneto",
      sex: "m"
    },
    {
      nome: "Maria",
      regione: "lazio",
      sex: "f"
    },
    {
      nome: "Matilde",
      regione: "veneto",
      sex: "f"
    },
    {
      nome: "Pippo",
      regione: "campania",
      sex: "m"
    }
  ];

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
  keys = Object.keys(this.sogg[0]);
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

  spostaDestra() {
    this.resetSelectionEmitter();
    this.currentSelection[0].forEach(element => {
      this.sogg2.push(element);
    });
    this.currentSelection[0].forEach(item => {
      this.sogg = this.sogg.filter(i => i.nome != item.nome);
    });
  }
  spostaSinistra() {
    this.resetSelectionEmitter();
    this.currentSelection[1].forEach(element => {
      this.sogg.push(element);
    });
    this.currentSelection[1].forEach(item => {
      this.sogg2 = this.sogg2.filter(i => i.nome != item.nome);
    });
  }

  resetSelectionEmitter() {
    this.resetSelectionListener.emit(null);
  }
}
