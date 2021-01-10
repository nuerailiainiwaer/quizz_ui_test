import { Component, OnInit } from '@angular/core';
import { SavedService } from '../../services/saved.service';

@Component({
  selector: 'app-savedques',
  templateUrl: './savedques.component.html',
  styleUrls: ['./savedques.component.css'],
})
export class SavedquesComponent implements OnInit {
  questions: Array<any>;
  user_id: any;
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

  constructor(private meme: SavedService) {}

  ngOnInit(): void {
    this.meme.getQues().subscribe(
      (res) => {
        this.getQues(res.data._id);
      },
      (err) => console.log(err)
    );
  }
  getQues(id: any) {
    this.meme.getQuesWithId(id).subscribe((res) => {
      var idarray = this.extractQUestions(res.data);
      this.looparray(idarray);
    });
  }

  extractQUestions(meme: any) {
    let x = meme.map((item) => {
      return {
        quesID: item.quesID,
      };
    });

    return x;
  }
  looparray(array: any) {
    let memearray: any = [];
    for (var i = 0; i < array.length; i++) {
      var id = array[i].quesID;
      this.meme.getSingleQues(id).subscribe((res) => {
        memearray.push(res.data);
        console.log(res.data);
      });
    }
    this.questions = memearray;
    console.log(memearray);
  }
}
