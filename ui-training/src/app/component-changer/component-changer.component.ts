import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Calculators {
  value: string;
  type: AllPages;
}

enum AllPages {
  Area = 'area',
  Permit = "permit",
  Prime = "prime"
}

@Component({
  selector: 'app-component-changer',
  templateUrl: './component-changer.component.html',
  styleUrls: ['./component-changer.component.scss']
})

export class ComponentChangerComponent {
  Anypage: Calculators[] = [
    { value: 'Area calculation', type: AllPages.Area },
    { value: 'Permit calculation', type: AllPages.Permit },
    { value: 'Prime number calculation', type: AllPages.Prime },
  ];

  constructor(private router: Router) { }

  page($event: any): void {
    console.log($event.value)
    this.router.navigateByUrl(`/${$event.value}`);
  }
}
