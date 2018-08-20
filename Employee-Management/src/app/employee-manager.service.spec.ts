import { TestBed, inject } from '@angular/core/testing';
import { EmployeeManagerService } from './employee-manager.service';

describe('EmployeeServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeManagerService]
    });
  });

  it('should be created', inject([EmployeeManagerService], (service: EmployeeManagerService) => {
    expect(service).toBeTruthy();
  }));
});
