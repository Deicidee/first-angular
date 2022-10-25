import { Dir } from '@angular/cdk/bidi';
import { Component, Directive, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NG_VALIDATORS, ValidatorFn, AbstractControl } from '@angular/forms';
import { delay, Observable } from 'rxjs';

export function areaLenghtValidator(): ValidatorFn {
  const validator = (control: AbstractControl) => {
    const tri_line1 = Number(control.parent?.get('line1')?.value)
    const tri_line2 = Number(control.parent?.get('line2')?.value)
    const tri_line3 = Number(control.parent?.get('line3')?.value)

    if ((tri_line1 + tri_line2 < tri_line3) || (tri_line1 + tri_line3 < tri_line2) || (tri_line2 + tri_line3 < tri_line1)) {
      return { 'invalidLenght': true }
    }
    return null;
  }
  return validator;
}

@Component({
  selector: 'app-area-calc',
  templateUrl: './area-calc.component.html',
  styleUrls: ['./area-calc.component.scss']
})

export class AreaCalcComponent implements OnInit {

  rectangle = new FormGroup({
    line1: new FormControl('', [Validators.required, Validators.pattern("^[0-9.]*$")]),
    line2: new FormControl('', [Validators.required, Validators.pattern("^[0-9.]*$")]),
    result: new FormControl(''),
  });
  triangle = new FormGroup({
    line1: new FormControl('', [Validators.required, Validators.pattern("^[0-9.]*$")]),
    line2: new FormControl('', [Validators.required, Validators.pattern("^[0-9.]*$")]),
    line3: new FormControl('', [Validators.required, Validators.pattern("^[0-9.]*$")]),
    result: new FormControl('', [areaLenghtValidator()])
  })

  constructor() { }

  ngOnInit(): void {
    this.rectangle.get('line1')?.valueChanges.subscribe((x) => {
      this.result_rect();
    })
    this.rectangle.get('line2')?.valueChanges.subscribe((y) => {
      this.result_rect();
    })
    this.triangle.get('line1')?.valueChanges.subscribe(() => {
      this.result_tri()
    })
    this.triangle.get('line2')?.valueChanges.subscribe(() => {
      this.result_tri()
    })
    this.triangle.get('line3')?.valueChanges.subscribe(() => {
      this.result_tri()
    })

  }

  result_rect() {
    const line_a = Number(this.rectangle.get('line1')?.value)
    const line_b = Number(this.rectangle.get('line2')?.value)
    const area = line_a * line_b
    if (isNaN(line_a)) {
      return this.triangle.get('result')?.setValue('')
    } else if (isNaN(line_b)) {
      return this.triangle.get('result')?.setValue('')
    } else if (line_a > 0 && line_b > 0) {
      this.rectangle.get('result')?.markAsTouched()
      this.rectangle.get('result')?.setValue(`${area}`)
    }
  }

  result_tri() {
    const line_a = Number(this.triangle.get('line1')?.value)
    const line_b = Number(this.triangle.get('line2')?.value)
    const line_c = Number(this.triangle.get('line3')?.value)
    const area = (line_a + line_b + line_c) / 2

    if (isNaN(line_a)) {
      return this.triangle.get('result')?.setValue('')
    } else if (isNaN(line_b)) {
      return this.triangle.get('result')?.setValue('')
    } else if (isNaN(line_c)) {
      return this.triangle.get('result')?.setValue('')
    } else if (line_a > 0 && line_b > 0 && line_c > 0) {
      this.triangle.get('result')?.markAsTouched()
      this.triangle.get('result')?.setValue(`${area}`)
    }
  }

}

