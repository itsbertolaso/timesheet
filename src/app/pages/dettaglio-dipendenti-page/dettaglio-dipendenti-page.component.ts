import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DipendentiService } from "src/core/service/dipendenti.service";
import { DomainService } from "src/core/service/domain.service";

@Component({
  selector: "app-dettaglio-dipendenti-page",
  templateUrl: "./dettaglio-dipendenti-page.component.html",
  styleUrls: ["./dettaglio-dipendenti-page.component.scss"]
})
export class DettaglioDipendentiPageComponent implements OnInit {
  soggetto;
  constructor(
    public routeActive: ActivatedRoute,
    public dipendente: DipendentiService,
    public country: DomainService
  ) {}

  ngOnInit() {
    const id = this.routeActive.snapshot.params.id;
    this.dipendente.getById(id).subscribe(res => {
      this.country.getByIso(res.country).subscribe(cc => {
        let s = { ...res, country: cc[0].description };
        console.log(cc[0].description);
        this.soggetto = s;
      });
    });
  }
}
