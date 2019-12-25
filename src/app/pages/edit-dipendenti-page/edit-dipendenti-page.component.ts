import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { DipendentiService } from "src/core/service/dipendenti.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-edit-dipendenti-page",
  templateUrl: "./edit-dipendenti-page.component.html",
  styleUrls: ["./edit-dipendenti-page.component.scss"]
})
export class EditDipendentiPageComponent implements OnInit {
  public formgroup: FormGroup;
  public soggetto;
  public id;
  constructor(
    public fb: FormBuilder,
    public router: Router,
    public dipendente: DipendentiService,
    public routeActive: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.routeActive.snapshot.params.id;
    this.soggetto = this.dipendente.ListaSoggetti.find(i => i.id == this.id);
    this.formgroup = this.fb.group({
      nome: [this.soggetto.nome],
      regione: [this.soggetto.regione],
      sex: [this.soggetto.sex]
    });
  }
  conferma() {
    this.dipendente.replace({ id: this.id, ...this.formgroup.value });
    this.router.navigate(["dipendenti"]);
  }
}
