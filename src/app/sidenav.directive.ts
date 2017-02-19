import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'appSidenav',
  exportAs: "SidenavDirective",
  host: {'[style.height.%]':'30',
         '[style.width.%]':'30',
         '[style.transition.s]':'0.5'},
         
})
export class SidenavDirective {

  constructor() { }

}
