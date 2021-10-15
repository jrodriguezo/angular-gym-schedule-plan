import { TestBed } from '@angular/core/testing';

import { CalorieNinjaService } from './calorie-ninja.service';

describe('CalorieNinjaService', () => {
  let service: CalorieNinjaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalorieNinjaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
