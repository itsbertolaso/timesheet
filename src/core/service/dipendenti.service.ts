import { Injectable } from "@angular/core";
import * as uuid from "uuid";
@Injectable({
  providedIn: "root"
})
export class DipendentiService {
  constructor() {}
  ListaSoggetti = [
    {
      id: uuid.v4(),
      nome: "Marco",
      regione: "Veneto",
      sex: "m"
    }
  ];
  /*

*/
  public getAll(): any[] {
    return this.ListaSoggetti;
  }

  getByName(name: string): any[] {
    return this.ListaSoggetti.filter(i => i.nome === name);
  }
  getById(id: string) {
    return this.ListaSoggetti.find(i => i.id === id);
  }
  add(item: any) {
    const obj = { id: uuid.v4(), ...item };
    this.ListaSoggetti.push(obj);
  }
  deleteById(id: string) {
    this.ListaSoggetti = this.ListaSoggetti.filter(i => i.id !== id);
  }
  replace(item: any) {
    this.ListaSoggetti = this.ListaSoggetti.map(i =>
      i.id === item.id ? item : i
    );
  }
}
