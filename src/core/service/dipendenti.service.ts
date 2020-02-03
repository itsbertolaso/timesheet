import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class DipendentiService {
  constructor(private api: ApiService) {}
  private readonly path = "api/dipendenti/";

  public getAll(): Observable<any> {
    return this.api.get(this.path);
  }
  getById(id: string) {
    return this.api.get(this.path + "id/" + id);
  }
  add(item: any): Observable<any> {
    const obj = { ...item };
    return this.api.post(this.path, obj);
  }
  public deleteById(id: string): Observable<any> {
    return this.api.delete(this.path, id);
  }
  replace(item: any): Observable<any> {
    return this.api.replace(this.path, item.id, item);
  }
  filter(key: string, value: any) {
    return this.api.filter(this.path, key, value);
  }
}
