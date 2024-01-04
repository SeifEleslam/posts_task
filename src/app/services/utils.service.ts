import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable()
export class UtilsService {
  compareWithForm(form: NgForm, obj: any, keys: string[]) {
    if (!obj) return;
    const newData: any = {};
    const oldData: any = {};
    keys.forEach((key) => {
      newData[key] = form.controls[key].value;
      oldData[key] = obj[key];
    });
    const diff = this.getObjectDifference(oldData, newData);
    return diff;
  }

  focusInvalid(formID: string) {
    const formEl = document.getElementById(formID);
    const firstInvalidControl = formEl!.getElementsByClassName('ng-invalid')[0];
    firstInvalidControl.scrollIntoView();
    (firstInvalidControl as HTMLElement).focus();
  }

  isArrsEqual(arr1: any[], arr2: any[]): boolean {
    return (
      arr1.length === arr2.length &&
      arr1.every((itm1) =>
        arr2.some((itm2) => {
          if (Array.isArray(itm1) && Array.isArray(itm2)) {
            return this.isArrsEqual(itm1, itm2);
          } else if (itm1 instanceof Object && itm2 instanceof Object) {
            if (Object.keys(this.getObjectDifference(itm1, itm2)).length > 0) {
              return false;
            }
            return true;
          }
          return itm1 === itm2;
        })
      )
    );
  }

  getObjectDifference(obj1: any, obj2: any): any {
    const diff: any = {};
    for (let key in obj1) {
      if (obj1.hasOwnProperty(key)) {
        if (obj2.hasOwnProperty(key)) {
          if (obj1[key] === null && obj2[key] === null) {
            continue;
          } else if (
            typeof obj1[key] === 'object' &&
            typeof obj2[key] === 'object' &&
            obj1[key] !== null &&
            obj2[key] !== null
          ) {
            if (Array.isArray(obj2[key])) {
              if (!this.isArrsEqual(obj1[key], obj2[key])) {
                diff[key] = obj2[key];
              } else {
                continue;
              }
            } else {
              const nestedDiff = this.getObjectDifference(obj1[key], obj2[key]);
              if (Object.keys(nestedDiff).length > 0) {
                diff[key] = nestedDiff;
              }
            }
          } else if (obj1[key] !== obj2[key]) {
            diff[key] = obj2[key];
          }
        } else {
          diff[key] = obj1[key];
        }
      }
    }
    for (let key in obj2) {
      if (obj2.hasOwnProperty(key) && !obj1.hasOwnProperty(key)) {
        diff[key] = obj2[key];
      }
    }
    return diff;
  }
}
