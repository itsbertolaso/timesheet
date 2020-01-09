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
    this.dipendente.getById(this.id).subscribe(res => {
      this.formgroup = this.fb.group({
        name: [res.name],
        surname: [res.surname],
        taxCode: [res.taxCode],
        country: [res.country],
        city: [res.city],
        province: [res.province],
        phoneNumber: [res.phoneNumber],
        address: [res.address],
        gender: [res.gender],
        email: [res.email]
      });
    });
  }
  conferma() {
    this.dipendente
      .replace({ id: this.id, ...this.formgroup.value })
      .subscribe(res => {
        this.router.navigate(["dipendenti"]);
      });
  }
}
