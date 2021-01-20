import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FooBarQuixService {
  constructor(private httpClient: HttpClient) { }

  sendNumberToServer(inputNumber: number) {
    this.httpClient
      .get('http://localhost:8080/foo-bar-quix/' + inputNumber)
      .subscribe(
        () => {
          // TODO Emit
        },
        (error) => {
          console.log("Erreur lors de la requête fooBarquix : " + error);
        }
      );
}


}
