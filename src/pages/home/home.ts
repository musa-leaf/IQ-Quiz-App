import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  timerObject: any;
  timerValue : number = 0;
  counter : number = 0;
  score : number = 0;
  done : boolean = false;

  constructor(public navCtrl: NavController) {

  }

  onStart(){
    this.timerObject = Observable.interval(1000).subscribe(
      x => {
        this.timerValue = x;
      }
    );
    this.proceed();
  }
  
  proceed(){
    if(this.counter < 5)
      this.counter++;
  }

  scoreTracker(arg){

  }

  viewResults(){
    console.log(this.timerValue + this.score);
  }

}
