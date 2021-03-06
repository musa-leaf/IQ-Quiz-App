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
  dispalyCounter: number = 0;
  score : number = 0;
  done : boolean = false;
  scores = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  answersUser = ["ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph"];
  answers = ['true','false','false','true','true',
             'true','false','false','false','false',
             'false','true','true','false','true'
            ];


  constructor(public navCtrl: NavController) {

  }

  //on quiz start
  onStart(){
    this.timerObject = Observable.interval(1000).subscribe(
      x => {
        this.timerValue = x;
      }
    );
    this.proceed();
  }
  
  //next question
  proceed(){
    if(this.counter < 15)
      this.counter++; 
  }

  //track user score
  scoreTracker(arg){
    this.answersUser[this.counter-1] = arg;
  }

  //calculate and display final results
  viewResults(){
    this.timerObject.unsubscribe();
    for(let i = 0; i < this.answers.length; i++ ){
      if(this.answersUser[i] === this.answers[i]){
        this.score++;
        this.scores[i] = 1;
      }
    }
    this.done = true;
    this.counter = 16;
  }

  //reset counters
  reset(){
    this.done = false;
    this.counter = 0;
    this.score = 0;
    for(let i = 0; i < this.answers.length; i++ ){
      this.scores[i] = 0;
      this.answersUser[i] = "ph"; 
    }
  }

}
