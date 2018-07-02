import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { collectExternalReferences } from '@angular/compiler';

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
  answersUser = ["ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph"];
  answers = ['true','false','false','true','true','true','false','false','true','true','true','false','false','true','true'];


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
    console.log(this.answers.length);
    if(this.counter < 15)
      this.counter++;

    
  }

  scoreTracker(arg){
    this.answersUser[this.counter-1] = arg;
  }

  viewResults(){
    this.timerObject.unsubscribe();
    for(let i = 0; i < this.answers.length; i++ ){
      if(this.answersUser[i] === this.answers[i]){
        this.score++;
      }
    }
    
    this.done = true;
    this.counter = 16;
  }

  reset(){
    this.done = false;
    this.counter = 0;
    this.score = 0;
    this.answersUser = ["ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph"];
  }

}
