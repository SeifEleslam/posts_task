import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Subject } from 'rxjs';
import { PERPAGEOPTIONS, POSTLIMIT } from '../models/enums';

@Injectable()
export class ParamsService {
  reviewParams(params: any, paramsType: string[]): [boolean, Partial<Params>] {
    let newParams: any = {};

    let valid = true;
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        if (paramsType.includes(key) && params[key]) {
          newParams[key] = params[key];
        } else {
          valid = false;
        }
      }
    }
    return [
      +params['_start'] >= 0 &&
        +params['_start'] % POSTLIMIT === 0 &&
        POSTLIMIT === +params['_limit'] &&
        valid,
      {
        ...newParams,
        _start:
          +params['_start'] >= 0
            ? +params['_start'] % POSTLIMIT === 0
              ? +params['_start']
              : Math.floor(+params['_start'] / 10) * 10
            : 0,
        _limit:
          POSTLIMIT === +params['_limit']
            ? +params['_limit']
            : PERPAGEOPTIONS[0],
      },
    ];
  }
}
