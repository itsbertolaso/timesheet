import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioDipendentiPageComponent } from './dettaglio-dipendenti-page.component';

describe('DettaglioDipendentiPageComponent', () => {
  let component: DettaglioDipendentiPageComponent;
  let fixture: ComponentFixture<DettaglioDipendentiPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioDipendentiPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioDipendentiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
