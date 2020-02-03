import { Component, OnInit } from "@angular/core";
import { DataTableOptions } from "src/app/api/datatable-options";
import { DipendentiService } from "src/core/service/dipendenti.service";
import { Router } from "@angular/router";
import { ApiService } from "src/core/service/api.service";

@Component({
  selector: "app-dipendenti-page",
  templateUrl: "./dipendenti-page.component.html",
  styleUrls: ["./dipendenti-page.component.scss"]
})
export class DipendentiPageComponent implements OnInit {
  options: DataTableOptions = {
    colsOptions: [
      {
        label: "ID",
        name: "idDipendente"
      },
      {
        label: "Name",
        name: "name"
      },
      {
        label: "Surname",
        name: "surname"
      },
      {
        label: "Tax Code",
        name: "taxcode"
      }
    ]
  };
  public lista: any[];
  public keys = [
    {
      label: "Name",
      name: "name"
    },
    {
      label: "Surname",
      name: "surname"
    },
    {
      label: "Tax Code",
      name: "taxcode"
    }
  ];
  constructor(
    public dipendenteService: DipendentiService,
    public router: Router,
    public api: ApiService
  ) {}

  ngOnInit() {
    this.dipendenteService.getAll().subscribe(res => {
      this.lista = res;
    });
  }

  select(input: any[]) {
    const sogg = input[0];
    this.router.navigate(["dipendenti", sogg.idDipendente]);
  }
  onDeleteHandler(id: any) {
    this.dipendenteService.deleteById(id).subscribe(r => {
      this.dipendenteService.getAll().subscribe(res => {
        this.lista = res;
      });
    });
  }
  onEditHandler(id: any) {
    console.log(id);
    this.router.navigate(["dipendenti/edit", id]);
  }
  filter(res: any) {
    console.log(res);
    this.dipendenteService
      .filter(res.key, res.filter)
      .subscribe((res: any[]) => {
        this.lista = res;
      });
  }
}
