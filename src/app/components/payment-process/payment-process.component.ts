import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment-process',
  templateUrl: './payment-process.component.html',
  styleUrls: ['./payment-process.component.css']
})
export class PaymentProcessComponent implements OnInit {

  constructor() { }

  stepone:boolean = true;
  steptwo:boolean = false;
  stepthree:boolean = false;
  stepOneDone:boolean = true;
  stepTwoDone:boolean = false;
  stepThreeDone:boolean = false;

  ngOnInit(): void {
  }

  continue() {
    this.stepone = !this.stepone
    this.steptwo = !this.steptwo
    this.stepTwoDone = true;
  }

  pay() {
    this.steptwo = !this.steptwo
    this.stepthree = !this.stepthree
    this.stepThreeDone = true;
  }
  onSubmit(from:NgForm) {
    console.log(from);
  }
  onSubmit2(from2:NgForm) {
    console.log(from2);
  }
}
