import { Component, OnInit } from '@angular/core';
import { GetallquesService } from '../../services/getallques.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  meme: Array<any>;
  ques: any;
  constructor(private getall: GetallquesService) {
    this.meme = new Array<any>();
  }

  ngOnInit(): void {
    this.getall.getQuestions().subscribe((ques) => {
      this.meme = this.anwar(ques.data);
    });
  }
  search() {
    if (this.ques == '') {
      this.ngOnInit();
    } else {
      this.meme = this.meme.filter((res) => {
        return res.ques
          .toLocaleLowerCase()
          .match(this.ques.toLocaleLowerCase());
      });
    }
  }

  anwar(array: any) {
    var i;
    var arr = [];
    for (i = 0; i < array.length; i++) {
      array[i].ranking = i;
      arr.push(array[i]);
    }
    return arr;
  }
}
