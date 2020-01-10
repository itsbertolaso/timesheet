import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DomainService {
  constructor(private api: ApiService) {}
  private readonly countries = "countries";
  private readonly region = "region";
  private readonly cities = "cities";

  public getAll(): Observable<any> {
    return this.api.get(this.countries);
  }
  getByIso(iso: string) {
    return this.api.get(this.countries + "?iso=" + iso);
  }
  getRegionInCountry(iso) {
    return this.api.get(this.region + "?coutryIso=" + iso);
  }
  getCitiesInRegion(region) {
    return this.api.get(this.cities + "?regionDescription=" + region);
  }
  getCountryByKey(key, value) {
    return this.api.get(this.countries + "?" + key + "=" + value);
  }
  getRegionByKey(key, value) {
    return this.api.get(this.region + "?" + key + "=" + value);
  }
}
