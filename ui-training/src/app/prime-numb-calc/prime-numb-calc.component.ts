import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

export function wrongNumberUse(): ValidatorFn {
  const validator = (control: AbstractControl) => {
    const prime_line1 = control.parent?.get('line1')?.value

    if (prime_line1) {
      return { 'wrongNumberUse': true }
    }
    return null;
  }
  return validator;
}

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
    this.primeNumber.get('line1')?.valueChanges.subscribe((x) => {
      if (x) {
        return this.primeNumbes_s()
      }
    })
  }

  primeNumbes_s() {
    var prime = this.primeNumber.get('line1')?.value
    const calculate = prime?.split(",")
    const primeArray: any[] = []
    const nonPrimeArray: any[] = []
    calculate?.forEach((z) => {
      const szam = Number(z)
      let kutyaFlag = true;
      if (szam == 1) {
        kutyaFlag = false
      }
      for (let index = 2; index < szam; index++) {
        if (szam % index == 0) {
          kutyaFlag = false
          break;
        }
      }
      if (kutyaFlag) {
        primeArray.push(z)
      } else {
        nonPrimeArray.push(z)
      }
    })
    this.primeNumber.get('prime')?.markAsTouched()
    this.primeNumber.get('line1')?.markAsTouched()
    this.primeNumber.get('prime')?.setValue(primeArray?.join(","))
    this.primeNumber.get('notPrime')?.setValue(nonPrimeArray?.join(","))

  }

}