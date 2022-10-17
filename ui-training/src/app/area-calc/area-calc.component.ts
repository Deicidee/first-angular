import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-area-calc',
  templateUrl: './area-calc.component.html',
  styleUrls: ['./area-calc.component.scss']
})
export class AreaCalcComponent implements OnInit {



  rectangle = new FormGroup({
    line1: new FormControl(''),
    line2: new FormControl(''),
    result: new FormControl('')

  });

  constructor() { }

  ngOnInit(): void {
    this.rectangle.get('line1')?.valueChanges.subscribe((x) => {
      this.result();
    })
    this.rectangle.get('line2')?.valueChanges.subscribe((y) => {
      this.result();
    })

  }

  result() {
    const line_a = Number(this.rectangle.get('line1')?.value)
    const line_b = Number(this.rectangle.get('line2')?.value)
    const num = line_a * line_b
    this.rectangle.get('result')?.setValue(`${num}`)
    console.log(num)
  }
}
