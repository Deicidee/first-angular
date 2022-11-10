import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-prime-numb-calc',
  templateUrl: './prime-numb-calc.component.html',
  styleUrls: ['./prime-numb-calc.component.scss']
})
export class PrimeNumbCalcComponent implements OnInit {

  primeNumber = new FormGroup({
    line1: new FormControl('', [Validators.pattern("^[0-9,]*$")]),
    prime: new FormControl('', [Validators.pattern("^[0-9,]*$")]),
    notPrime: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
    this.getPrimeNumberFormControl('line1').valueChanges.pipe(
      debounceTime(500)
    ).subscribe((x) => {
      if (x) {
        return this.calculatePrimeNumberDecision()
      }
    })
  }

  calculatePrimeNumberDecision() {
    const rawNumbers = this.getPrimeNumberFormValue('line1').split(",");
    const primeArray: any[] = [];
    const nonPrimeArray: any[] = [];

    rawNumbers.forEach((rawNumber:string) => {
      let primeNumberDecision = true;
      const number = Number(rawNumber);

      if (number == 1) {
        primeNumberDecision = false
      }
      for (let index = 2; index < number; index++) {
        if (number % index == 0) {
          primeNumberDecision = false
          break;
        }
      }
      if (primeNumberDecision) {
        primeArray.push(rawNumber)
      } else {
        nonPrimeArray.push(rawNumber)
      }
    })
    this.getPrimeNumberFormControl('prime').markAsTouched()
    this.getPrimeNumberFormControl('line1').markAsTouched()
    this.getPrimeNumberFormControl('prime').setValue(primeArray.join(","))
    this.getPrimeNumberFormControl('notPrime').setValue(nonPrimeArray.join(","))
  }

  private getPrimeNumberFormValue(controlName: string): string {
    const primeNumberLineControl = this.getPrimeNumberFormControl(controlName)
    return primeNumberLineControl ? primeNumberLineControl.value : ''
  }

  private getPrimeNumberFormControl(controlName: string): AbstractControl<string> {
    return this.primeNumber.get(controlName) as AbstractControl<string>
  }

}