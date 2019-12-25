import { Component, OnInit } from "@angular/core";
import { DataTableOptions } from "src/app/api/datatable-options";
import { DipendentiService } from "src/core/service/dipendenti.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-dipendenti-page",
  templateUrl: "./dipendenti-page.component.html",
  styleUrls: ["./dipendenti-page.component.scss"]
})
export class DipendentiPageComponent implements OnInit {
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
  public lista: any[];
  constructor(
    public dipendenteService: DipendentiService,
    public router: Router
  ) {}

  ngOnInit() {
    this.lista = this.dipendenteService.getAll();
  }

  select(input: any[]) {
    const sogg = input[0];
    this.router.navigate(["dipendenti", sogg.id]);
  }
  onDeleteHandler(id: any) {
    this.dipendenteService.deleteById(id);
    this.lista = this.dipendenteService.getAll();
  }
  onEditHandler(id: any) {
    this.router.navigate(["dipendenti/edit", id]);
  }
}
