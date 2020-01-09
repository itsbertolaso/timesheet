import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"]
})
export class FilterComponent implements OnInit {
  public formgroup: FormGroup;
  @Output() onFilter: EventEmitter<any> = new EventEmitter<any>();
  @Input() colsOption: any;

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.formgroup = this.fb.group({
      key: [this.colsOption[0].name],
      filter: [""]
    });
  }
  conferma() {
    this.onFilter.emit(this.formgroup.value);
  }
}
