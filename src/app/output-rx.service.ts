import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  // we declare that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class OutputRxService {
  isOpen: boolean = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * Hàm này có thể gọi ở bất kỳ đâu trong module
   */
  toggle() {
    this.isOpen = !this.isOpen;
    /**
     * trigger callback function  ở ham change.subscribe(callback)
     */
    this.change.emit(this.isOpen);
  }
}
