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
        label: "Name",
        name: "name"
      },
      {
        label: "Surname",
        name: "surname"
      },
      {
        label: "City",
        name: "city"
      },
      {
        label: "Gender",
        name: "gender"
      },
      {
        label: "Email",
        name: "email"
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
      name: "taxCode"
    },
    {
      label: "Country",
      name: "country"
    },
    {
      label: "Province",
      name: "province"
    },
    {
      label: "City",
      name: "city"
    },
    {
      label: "Address",
      name: "address"
    },
    {
      label: "Phone number",
      name: "phoneNumber"
    },
    {
      label: "Gender",
      name: "gender"
    },
    {
      label: "Email",
      name: "email"
    },
    {
      label: "ID",
      name: "id"
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
    this.api.get("employees").subscribe(res => {
      console.log(res);
    });
  }

  select(input: any[]) {
    const sogg = input[0];
    this.router.navigate(["dipendenti", sogg.id]);
  }
  onDeleteHandler(id: any) {
    this.dipendenteService.deleteById(id).subscribe(r => {
      this.dipendenteService.getAll().subscribe(res => {
        this.lista = res;
      });
    });
  }
  onEditHandler(id: any) {
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
