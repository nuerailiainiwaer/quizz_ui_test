import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetquesService } from '../../services/getques.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { SavedService } from 'src/app/services/saved.service';
import { createContentChildren } from '@angular/compiler/src/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-allques',
  templateUrl: './allques.component.html',
  styleUrls: ['./allques.component.css'],
})
export class AllquesComponent implements OnInit {
  savedQues: boolean = true;
  questionDone: boolean = true;
  isImportant: boolean = true;
  myVar: boolean = false;
  testimage: any = 'http://lorempixel.com/400/200/';

  meme: Array<any>;
  meme1: Array<any>;
  meme2: Array<any>;
  meme3: Array<any>;
  meme4: Array<any>;

  selectedChoise: String;

  road1: Array<any>;
  road2: Array<any>;
  road3: Array<any>;
  road4: Array<any>;

  speccificQues = {
    _id: '',
    ques: '',
    A: '',
    B: '',
    C: '',
    D: '',
    anS: '',
    photo: '',
    saved: '',
  };
  constructor(
    private getques: GetquesService,
    private doneQuesmeme: SavedService,
    private authService: AuthService
  ) {
    this.meme = new Array<any>();
    this.meme1 = new Array<any>();
    this.meme2 = new Array<any>();
    this.arrrr = new Array<any>();
  }

  ngOnInit(): void {
    this.bibi();
  }
  meme5: any;

  anwar(array: any) {
    var i;
    var arr = [];
    for (i = 0; i < array.length; i++) {
      array[i].ranking = i;
      arr.push(array[i]);
    }
    return arr;
  }
  bibi() {
    this.getques.getRoad1().subscribe((ques) => {
      console.log(ques.data);
      this.meme = this.anwar(ques.data);
    });
    this.getques.getRoad2().subscribe((ques) => {
      this.meme1 = this.anwar(ques.data);
      console.log(ques.data);
    });
    this.getques.getRoad3().subscribe((ques) => {
      this.meme2 = this.anwar(ques.data);
      console.log(ques.data);
    });
  }

  fireEvent(id: any) {
    this.toggledBtn = true;
    this.saveButton = true;
    document.getElementById('picture').style.display = 'none';
    this.speccificQues = this.meme[id];
    this.picTure(this.meme[id].photo, this.meme[id]._id);
    console.log(this.meme);
    this.backtoBlack();
    document.getElementById('ques_container').style.display = 'block';
    this.changeBackground();
    this.nylove();
    this.checkthesave();
  }
  fireEvent1(id: any) {
    this.toggledBtn = true;
    this.speccificQues = this.meme1[id];
    this.picTure(this.meme1[id].photo, this.meme1[id]._id);
    this.backtoBlack();
    document.getElementById('ques_container').style.display = 'block';
    this.nylove();
  }
  fireEvent2(id: any) {
    this.toggledBtn = true;
    this.speccificQues = this.meme2[id];
    this.picTure(this.meme2[id].photo, this.meme2[id]._id);
    this.backtoBlack();
    document.getElementById('ques_container').style.display = 'block';
    this.nylove();
  }
  picTure(pho: any, id: any) {
    if (pho !== 'nurili') {
      document.getElementById('picture').style.display = 'block';
      console.log('Picture is loaded!!');
      const pic = `http://localhost:5000/uploads/photo_${id}.jpg`;
      this.speccificQues.photo = pic;
    } else if (pho === 'nurili') {
      document.getElementById('picture').style.display = 'none';
    }
  }

  addUser(select: String) {
    this.selectedChoise = select;
  }
  confirm() {
    this.uncheckBox();
    this.queryselet();
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
  queryselet() {
    var x = document.getElementsByClassName(
      'selection'
    ) as HTMLCollectionOf<HTMLElement>;
    var btnsArr = Array.from(x);
    if (this.speccificQues.anS === 'A') {
      x[0].style.color = 'blue';
      x[0].style.fontWeight = '900';
    } else if (this.speccificQues.anS === 'B') {
      x[1].style.color = 'blue';
      x[1].style.fontWeight = '900';
    } else if (this.speccificQues.anS === 'C') {
      x[2].style.color = 'blue';
      x[2].style.fontWeight = '900';
    } else if (this.speccificQues.anS === 'D') {
      x[3].style.color = 'blue';
      x[3].style.fontWeight = '900';
    }
  }
  backtoBlack() {
    var x = document.getElementsByClassName(
      'selection'
    ) as HTMLCollectionOf<HTMLElement>;

    for (var i = 0; i < x.length; i++) {
      x[i].style.color = 'black';
      x[i].style.fontWeight = '400';
    }
  }
  changeBackground() {
    document.getElementById('damda').classList.add('hidden');
  }
  ///////////////
  saveButton: boolean = true;
  saveToggle() {
    if (this.saveButton) {
      this.save();
    } else if (!this.saveButton) {
      this.deleteSavedQues();
    }
  }
  deleteSavedQues() {
    this.doneQuesmeme.getQues().subscribe((res) => {
      var userid = res.data._id;
      var userid = res.data._id;
      this.authService
        .checkSavedQues(userid, this.speccificQues._id)
        .subscribe((res1) => {
          console.log(res1.data[0]._id);
          this.authService
            .deleteSavedQuestion(res1.data[0]._id)
            .subscribe((res) => {
              console.log(res.success);
              if (res.success) {
                this.saveButton = true;
              }
            });
        });
    });
  }

  checkthesave() {
    this.doneQuesmeme.getQues().subscribe((res) => {
      var userid = res.data._id;
      this.authService
        .checkSavedQues(userid, this.speccificQues._id)
        .subscribe((res) => {
          if (typeof res.data[0] == 'undefined') {
            console.log('yearh');
          } else if (typeof res.data[0] === 'object') {
            this.saveButton = false;
          }
        });
    });
  }
  save() {
    this.doneQuesmeme.getQues().subscribe((res) => {
      var userid = res.data._id;
      this.authService
        .saveQuestion(this.speccificQues._id, userid)
        .subscribe((res) => {
          console.log(res.data._id);
        });
    });
    this.checkthesave();
  }

  test: any[] = [];

  ///////////////////////////
  toggledBtn: boolean = true;
  toggle() {
    if (this.toggledBtn) {
      this.done();
    } else if (!this.toggledBtn) {
      this.deleteMe();
    }
  }

  // var arrrr = [];

  arrrr: Array<any> = [];

  deleteMe() {
    var i;
    for (i = 0; i < this.speccificQues.saved.length; i++) {
      this.arrrr.push(this.speccificQues.saved[i]);
    }
    var cc = [];

    const index = this.arrrr.indexOf(this.speccificQues._id);
    if (index > -1) {
      cc = this.arrrr.splice(index, 1);
    }
    console.log(cc);

    this.doneQuesmeme
      .addTosavedQues(this.speccificQues._id, cc)
      .subscribe((res) => {
        this.toggledBtn = true;
        this.speccificQues.saved = res.data.saved;
        this.nylove();

        // window.location.reload();
      });
  }

  nylove() {
    var n;
    console.log(' i am in');
    if (this.speccificQues.saved === '') {
      console.log('empty');
    } else {
      this.doneQuesmeme.getQues().subscribe((ques) => {
        this.meme5 = ques.data._id;

        n = this.speccificQues.saved.includes(this.meme5);

        if (n) {
          this.toggledBtn = false;
          // this.questionDone = false;
        }
      });
    }
  }

  done() {
    this.doneQuesmeme.getQues().subscribe((res) => {
      console.log(res.data._id);
      var n = this.speccificQues.saved.includes(res.data._id);
      console.log(n);

      if (!n) {
        var i;
        for (i = 0; i < this.speccificQues.saved.length; i++) {
          this.test.push(this.speccificQues.saved[i]);
        }
        this.test.push(res.data._id);
      }
      this.doneQuesmeme
        .addTosavedQues(this.speccificQues._id, this.test)
        .subscribe((res) => {
          this.test = [];
          console.log(res.data.saved);

          this.speccificQues.saved = res.data.saved;
          this.nylove();
        });
    });
  }
}
