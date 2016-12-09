import { Injectable } from '@angular/core';
import { EscoClass } from './esco.class';
import { ESCOS } from './escos';


@Injectable()
export class EscoService {

  constructor() { }
   getEscos(): Promise<EscoClass[]> {
    return Promise.resolve(ESCOS);
  }

}
