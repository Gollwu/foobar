import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FooBarQuixService } from '../foo-bar-quix.service';
import { Result } from '../model/result';

@Component({
  selector: 'app-foo-bar-quix',
  templateUrl: './foo-bar-quix.component.html'
})
export class FooBarQuixComponent implements OnInit, OnDestroy {

  numbersConverted: Result[];
  numberSubscription: Subscription;

  constructor(private fooBarQuixService: FooBarQuixService) { }

  ngOnInit(): void {
     this.numberSubscription = this.fooBarQuixService.numberSubject.subscribe(
      (numbersConverted: Result[]) => {
        this.numbersConverted = numbersConverted;
      }
    );
    this.fooBarQuixService.emitNumbers();
  }

  ngOnDestroy(): void {
     this.numberSubscription.unsubscribe();
  }

  convertNumber(inputNumber: number): void {
      this.fooBarQuixService.sendNumberToServer(inputNumber);
  }

}

