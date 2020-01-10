import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { DipendentiService } from "src/core/service/dipendenti.service";
import { Router } from "@angular/router";
import { DomainService } from "src/core/service/domain.service";

@Component({
  selector: "app-new-dipendenti-page",
  templateUrl: "./new-dipendenti-page.component.html",
  styleUrls: ["./new-dipendenti-page.component.scss"]
})
export class NewDipendentiPageComponent implements OnInit {
  public formgroup: FormGroup;
  public allCountry: any[];
  public regions: any[];
  public cities: any[];

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public dipendente: DipendentiService,
    public country: DomainService
  ) {}

  ngOnInit() {
    this.country.getAll().subscribe(res => {
      this.allCountry = res;
      this.country.getRegionInCountry(this.allCountry[0].iso).subscribe(res => {
        this.regions = res;
        this.country
          .getCitiesInRegion(this.regions[0].description)
          .subscribe(res => {
            this.cities = res;
            this.formgroup = this.fb.group({
              name: [""],
              surname: [""],
              taxCode: [""],
              country: [this.allCountry[0].iso],
              city: [this.cities[0].description],
              province: [this.regions[0].description],
              phoneNumber: [""],
              address: [""],
              gender: [""],
              email: [""]
            });
          });
      });
    });
  }
  conferma() {
    this.dipendente.add(this.formgroup.value).subscribe(res => {
      this.router.navigate(["dipendenti"]);
    });
  }
  updateRegion(event: any) {
    this.country.getRegionInCountry(event.target.value).subscribe(res => {
      this.regions = res;
      this.formgroup = this.fb.group({
        name: [this.formgroup.value.name],
        surname: [this.formgroup.value.surname],
        taxCode: [this.formgroup.value.taxcode],
        country: [this.formgroup.value.country],
        city: [this.formgroup.value.city],
        province: [this.regions[0].description],
        phoneNumber: [this.formgroup.value.phoneNumber],
        address: [this.formgroup.value.address],
        gender: [this.formgroup.value.gender],
        email: [this.formgroup.value.email]
      });
      this.updateCity({
        target: {
          value: this.formgroup.value.province
        }
      });
    });
  }
  updateCity(event: any) {
    this.country.getCitiesInRegion(event.target.value).subscribe(res => {
      this.cities = res;
      console.log(res);
      this.formgroup = this.fb.group({
        name: [this.formgroup.value.name],
        surname: [this.formgroup.value.surname],
        taxCode: [this.formgroup.value.taxcode],
        country: [this.formgroup.value.country],
        city: [this.cities[0].description],
        province: [this.formgroup.value.province],
        phoneNumber: [this.formgroup.value.phoneNumber],
        address: [this.formgroup.value.address],
        gender: [this.formgroup.value.gender],
        email: [this.formgroup.value.email]
      });
    });
  }
}
