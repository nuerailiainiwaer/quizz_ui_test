import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output, Input } from '@angular/core';
import { GetquesService } from '../../services/getques.service';
import { ScoreService } from '../../services/score.service';
import { SavedService } from '../../services/saved.service';

@Component({
  selector: 'app-mockresult',
  templateUrl: './mockresult.component.html',
  styleUrls: ['./mockresult.component.css'],
})
export class MockresultComponent implements OnInit {
  mockTishu: string;
  restartQuiz: boolean;
  changeMe: boolean;

  submit: boolean = false;
  startQues: boolean = true;
  enableSubmit: boolean = false;

  interval: any;

  comingfromServer123: any;
  serverQuestions: Array<any> = [];
  fivePresent: Array<any>;
  final: Array<any>;
  // fiveQuestion: Array<any> = [];
  fiveQuestionArray: Array<any> = [];
  under4Lenth: number;
  questionID: number;
  enableConrim: boolean = false;

  selectedChoise: string;

  speccificQues: any = {
    _id: '',
    ques: '',
    A: '',
    B: '',
    C: '',
    D: '',
    anS: '',
    photo: '',
    saved: '',
    answerTheQues: '',
    correctAnswer: '',
    ranking: '',
  };
  // var obj:any = {}
  currentPost: any = {
    score: '',
    status: '',
  };

  constructor(
    private dataService: GetquesService,
    private score: ScoreService,
    private getme: SavedService
  ) {
    // this.meme = new Array<any>();
    this.fivePresent = new Array<any>();
    this.final = new Array<any>();
  }
  inputFunction() {}

  ngOnInit(): void {
    this.getQuestionFromServer();
    this.changeMe = false;
  }
  arraytrasna(arr: any) {
    var cc = [];
    var i;
    for (i = 0; i < arr.length; i++) {
      cc.push(arr[i]);
    }
    return cc;
  }

  // meme: Array<any>;
  bolen1: any;
  bolen2: any;
  bolen3: any;
  bolen4: any;
  bolen5: any;
  bolen6: any;

  getQuestionFromServer() {
    this.dataService.getRoad1().subscribe((res1) => {
      var cc = this.arraytrasna(res1.data);
      var i = this.tworandomnumber(res1.data.length);
      console.log(i);
      this.fivePresent.push(cc[i[0]]);
      this.fivePresent.push(cc[i[1]]);

      this.dataService.getRoad2().subscribe((res2) => {
        var ccc = this.arraytrasna(res2.data);
        var i = this.tworandomnumber(res2.data.length);
        this.fivePresent.push(ccc[i[0]]);
        this.fivePresent.push(ccc[i[1]]);

        this.dataService.getRoad3().subscribe((res3) => {
          var cccc = this.arraytrasna(res3.data);
          var i = this.tworandomnumber(res3.data.length);
          console.log(i);
          this.fivePresent.push(cccc[i[0]]);
          this.fivePresent.push(cccc[i[1]]);

          const clone = [...this.fivePresent];

          var cc = this.arraytrasna(clone);
          this.final = this.copay(cc);
          console.log(this.final);

          this.fireevent(0);
        });
      });
    });
  }

  tworandomnumber(num: any) {
    // All numbers are equal
    var numberOne = 3;
    var numberTwo = 3;
    var numberThree = 3;

    // run this loop until numberOne is different than numberThree
    do {
      numberOne = Math.floor(Math.random() * num);
    } while (numberOne === numberThree);

    // run this loop until numberTwo is different than numberThree and numberOne
    do {
      numberTwo = Math.floor(Math.random() * num);
    } while (numberTwo === numberThree || numberTwo === numberOne);

    return [numberOne, numberTwo];
  }

  copay(arry: any) {
    var arr = [];
    for (var i = 0; i < arry.length; i++) {
      arr[i] = arry[i];
      arr[i]['ranking'] = i;
      arr[i]['answerTheQues'] = false;
      arr[i]['correctAnswer'] = 3;
    }
    return arr;
  }
  addUser(selected: string) {
    this.selectedChoise = selected;
    this.enableConrim = true;
  }
  interate(arra: any) {
    for (var i = 0; arra.length < 0; i++) {
      console.log(arra[i]);
    }
  }

  OnNewPost(resutle: boolean) {
    if (resutle == false) {
      this.startQues = resutle;

      console.log('yeah');

      this.interval = setInterval(() => {
        this.updateCountdown();
      }, 1000);
    } else if (resutle == true) {
      clearInterval(this.interval);
      this.startQues = resutle;
      window.location.reload();
    }
  }
  timeMe: number = 100;
  updateCountdown() {
    const countdownElemnt = document.getElementById('countdown');
    const minutes = Math.floor(this.timeMe / 60);
    const secounds = this.timeMe % 60;
    countdownElemnt.innerHTML = `${minutes}:${secounds}`;
    if (this.timeMe < 0) {
      this.submitMock();
    }
    this.timeMe--;
  }
  confirm() {
    this.enableConrim = false;
    this.speccificQues.answerTheQues = true;

    if (this.speccificQues.anS === this.selectedChoise) {
      this.speccificQues.correctAnswer = 1;
    }
    this.checkFinish(this.final);
    var quesId = this.final.indexOf(this.speccificQues);

    if (quesId < 6) {
      this.fireevent(quesId);
    }
  }
  checkFinish(arr: any) {
    var corr = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].answerTheQues) {
        corr++;
      }
    }
    if (corr == 6) {
      this.enableSubmit = true;
    }
  }
  submitMock() {
    var corr = 0;
    var tishi;
    for (var i = 0; i < this.final.length; i++) {
      if (this.final[i].correctAnswer == 1) {
        corr++;
      }
    }
    if (corr >= 3) {
      this.mockTishu = 'You passed in the mock test congratulation!!';
      this.currentPost.status = 'pass';
      this.currentPost.score = corr;
    } else {
      this.mockTishu = 'You failed in the mock test, please go home!!';
      this.currentPost.status = 'fail';
      this.currentPost.score = corr;
    }
    this.currentPost.score = corr;
    console.log(this.currentPost.score, this.currentPost.status);

    this.getme.getQues().subscribe((res) => {
      this.score
        .createScore(
          res.data._id,
          this.currentPost.score,
          this.currentPost.status
        )
        .subscribe((res) => {
          console.log(res);
        });
    });

    clearInterval(this.interval);

    this.changeMe = true;
  }
  fireevent(id: number) {
    this.speccificQues = this.final[id];

    this.uncheckBox();
  }
  uncheckBox() {
    const unceck1 = document.getElementById('radioBOx1') as HTMLInputElement;
    const unceck2 = document.getElementById('radioBOx2') as HTMLInputElement;
    const unceck3 = document.getElementById('radioBOx3') as HTMLInputElement;
    const unceck4 = document.getElementById('radioBOx4') as HTMLInputElement;

    unceck1.checked = false;
    unceck2.checked = false;
    unceck3.checked = false;
    unceck4.checked = false;
  }
  close() {
    this.changeMe = false;
    this.currentPost = {
      status: '',
      score: '',
    };
    // this.restart = true;
    window.location.reload();
  }
}
