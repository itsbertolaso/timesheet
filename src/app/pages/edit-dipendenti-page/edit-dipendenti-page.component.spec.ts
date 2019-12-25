import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDipendentiPageComponent } from './edit-dipendenti-page.component';

describe('EditDipendentiPageComponent', () => {
  let component: EditDipendentiPageComponent;
  let fixture: ComponentFixture<EditDipendentiPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDipendentiPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDipendentiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
