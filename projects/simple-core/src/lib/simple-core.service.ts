import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleCoreService {

  constructor() {
    console.log('Simple Core Service Works!');
   }
}
