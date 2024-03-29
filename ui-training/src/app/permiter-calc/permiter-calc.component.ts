import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { debounceTime, merge } from 'rxjs';

export function permitLenghtValidator(): ValidatorFn {
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
  selector: 'app-permiter-calc',
  templateUrl: './permiter-calc.component.html',
  styleUrls: ['./permiter-calc.component.scss']
})
export class PermiterCalcComponent implements OnInit {
  rectangle = new FormGroup({
    line1: new FormControl('', [Validators.required, Validators.pattern("^[0-9.]*$")]),
    line2: new FormControl('', [Validators.required, Validators.pattern("^[0-9.]*$")]),
    result: new FormControl(''),
  });
  triangle = new FormGroup({
    line1: new FormControl('', [Validators.required, Validators.pattern("^[0-9.]*$")]),
    line2: new FormControl('', [Validators.required, Validators.pattern("^[0-9.]*$")]),
    line3: new FormControl('', [Validators.required, Validators.pattern("^[0-9.]*$")]),
    result: new FormControl('', [permitLenghtValidator()])
  })

  constructor() { }

  ngOnInit(): void {
    merge(
      this.getRectangleFormControl('line1').valueChanges,
      this.getRectangleFormControl('line2').valueChanges
    ).pipe(
      debounceTime(500)
    ).subscribe((x) => {
      this.calculateRetangleResult();
    });
    merge(
      this.getTriangleFormControl('line1').valueChanges,
      this.getTriangleFormControl('line2').valueChanges,
      this.getTriangleFormControl('line3').valueChanges
    ).pipe(
      debounceTime(500)
    ).subscribe(() => {
      this.calculateTriangleResult();
    });

  }

  calculateRetangleResult() {
    const lineA = Number(this.getRectangleFormValue('line1'))
    const lineB = Number(this.getRectangleFormValue('line2'))
    const permit = (lineA * 2) + (lineB * 2);

    if (isNaN(lineA)) {
      return this.getRectangleFormControl('result').setValue('')
    } else if (isNaN(lineB)) {
      return this.getRectangleFormControl('result').setValue('')
    } else if (lineA > 0 && lineB > 0) {
      this.getRectangleFormControl('result').markAsTouched()
      this.getRectangleFormControl('result').setValue(`${permit}`)
    }
  }

  calculateTriangleResult() {
    const lineA = Number(this.getTriangleFormValue('line1'))
    const lineB = Number(this.getTriangleFormValue('line2'))
    const lineC = Number(this.getTriangleFormValue('line3'))
    const permit = lineA + lineB + lineC;

    if (isNaN(lineA)) {
      return this.getTriangleFormControl('result').setValue('')
    } else if (isNaN(lineB)) {
      return this.getTriangleFormControl('result').setValue('')
    } else if (isNaN(lineC)) {
      return this.getTriangleFormControl('result').setValue('')
    } else if (lineA > 0 && lineB > 0 && lineC > 0) {
      this.getTriangleFormControl('result').markAsTouched()
      this.getTriangleFormControl('result').setValue(`${permit}`)
    }
  }

  private getRectangleFormValue(controlName: string): string {
    const rectangleLineControl = this.getRectangleFormControl(controlName)
    return rectangleLineControl ? rectangleLineControl.value : ''
  }

  private getRectangleFormControl(controlName: string): AbstractControl<string> {
    return this.rectangle.get(controlName) as AbstractControl<string>
  }

  private getTriangleFormValue(controlName: string): string {
    const triangleLineControl = this.getTriangleFormControl(controlName)
    return triangleLineControl ? triangleLineControl.value : ''
  }

  private getTriangleFormControl(controlName: string): AbstractControl<string> {
    return this.triangle.get(controlName) as AbstractControl<string>
  }

}