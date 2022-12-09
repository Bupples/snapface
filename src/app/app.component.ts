import { Component, OnInit } from '@angular/core';
import { concatMap, delay, filter, interval, map, mergeMap, Observable, of, take, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {

  }

  // redTrainsCalled = 0;
  // yellowTrainsCalled = 0;

  // public ngOnInit(): void {
  //   interval(500).pipe(
  //     take(10),
  //     map(value => value % 2 === 0 ? 'red' : 'yellow'),
  //     tap(color => console.log(`Color indicator: %c${color}`, `color: ${color}`)),
  //     concatMap(color => this.getTrainObservable$(color)),
  //     tap(train => console.log(`%c${train.color} ${train.trainIndex} train arrived!`, `color: ${train.color}`))
  //   ).subscribe();
  // }

  // private getTrainObservable$(color: 'red' | 'yellow') {
  //   const isRedTrain = color === 'red';
  //   isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
  //   const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
  //   console.log(`%c${color} ${trainIndex} train called!!`, `text-decoration: underline; color: ${color}`);
  //   return of({ color, trainIndex }).pipe(
  //     delay(isRedTrain ? 5000 : 6000)
  //   );
  // }
}
