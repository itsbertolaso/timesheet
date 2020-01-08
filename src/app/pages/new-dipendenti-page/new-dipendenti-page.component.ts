import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { DipendentiService } from "src/core/service/dipendenti.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-dipendenti-page",
  templateUrl: "./new-dipendenti-page.component.html",
  styleUrls: ["./new-dipendenti-page.component.scss"]
})
export class NewDipendentiPageComponent implements OnInit {
  public formgroup: FormGroup;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public dipendente: DipendentiService
  ) {}

  ngOnInit() {
    this.formgroup = this.fb.group({
      name: [""],
      surname: [""],
      taxcode: [""],
      country: [""],
      city: [""],
      province: [""],
      phoneNumber: [""],
      address: [""],
      gender: [""],
      email: [""]
    });
  }
  conferma() {
    this.dipendente.add(this.formgroup.value).subscribe(res => {
      this.router.navigate(["dipendenti"]);
    });
  }
}
