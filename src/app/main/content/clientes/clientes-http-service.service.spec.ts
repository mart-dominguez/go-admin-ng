import { TestBed, inject } from '@angular/core/testing';

import { ClientesHttpServiceService } from './clientes-http-service.service';

describe('ClientesHttpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientesHttpServiceService]
    });
  });

  it('should be created', inject([ClientesHttpServiceService], (service: ClientesHttpServiceService) => {
    expect(service).toBeTruthy();
  }));
});
