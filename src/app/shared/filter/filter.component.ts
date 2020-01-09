import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"]
})
export class FilterComponent implements OnInit {
  public formgroup: FormGroup;
  @Output() onFilter: EventEmitter<any> = new EventEmitter<any>();
  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.formgroup = this.fb.group({
      filter: [""]
    });
  }
  conferma() {
    this.onFilter.emit(this.formgroup.value.filter);
  }
}
