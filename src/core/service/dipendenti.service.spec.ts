/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DipendentiService } from './dipendenti.service';

describe('Service: Dipendenti', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DipendentiService]
    });
  });

  it('should ...', inject([DipendentiService], (service: DipendentiService) => {
    expect(service).toBeTruthy();
  }));
});
