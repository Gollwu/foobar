import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Result } from './model/result';

@Injectable({
  providedIn: 'root'
})
export class FooBarQuixService {
  constructor(private httpClient: HttpClient) { }

  numbersConverted: Result[] = [];
  numberSubject = new Subject<Result[]>();

  emitNumbers() {
    this.numberSubject.next(this.numbersConverted.slice());
  }

  addNumber(number: Result) {
    this.numbersConverted.push(number);
    this.emitNumbers();
  }

  sendNumberToServer(inputNumber: number) {
    this.httpClient
      .get('http://localhost:8080/foo-bar-quix/' + inputNumber)
      .subscribe(
        (response) => {
         const newResult = new Result();
         newResult.numberToConvert = inputNumber;
         newResult.result = response['result'];
         this.addNumber(newResult);
        },
        (error) => {
          console.log("Erreur lors de la requête fooBarquix : " + error);
        }
      );
}


}
