import { Component, OnInit } from '@angular/core';
import { SavedService } from '../../services/saved.service';

@Component({
  selector: 'app-myprogress',
  templateUrl: './myprogress.component.html',
  styleUrls: ['./myprogress.component.css'],
})
export class MyprogressComponent implements OnInit {
  mockResult: Array<any>;

  constructor(private meme: SavedService) {}

  ngOnInit(): void {
    this.meme.getQues().subscribe(
      (res) => {
        console.log(res.data._id);
        this.getScoreForUser(res.data._id);
      },
      (err) => console.log(err)
    );
  }
  getScoreForUser(id: any) {
    this.meme.getScoreForLoggedinuser(id).subscribe((res) => {
      console.log(res.data);
      this.mockResult = res.data;
    });
  }
  onDelete(id: any) {
    this.meme.deleteSingleScore(id).subscribe(
      (res) => {
        console.log(res);
        window.location.reload();
      },
      (err) => console.log(err)
    );
  }
}
