import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDipendentiPageComponent } from './new-dipendenti-page.component';

describe('NewDipendentiPageComponent', () => {
  let component: NewDipendentiPageComponent;
  let fixture: ComponentFixture<NewDipendentiPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDipendentiPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDipendentiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
