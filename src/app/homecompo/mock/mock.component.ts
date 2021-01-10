import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.css'],
})
export class MockComponent implements OnInit {
  @Output() emittingStart: EventEmitter<boolean> = new EventEmitter();
  @Input() restartQuiz = true;
  starter: boolean;
  restaetQuiz = true;

  // @Input()
  enabledAdd: boolean = true;

  constructor() {}

  ngOnInit(): void {}
  start() {
    this.enabledAdd = !this.enabledAdd;

    this.emittingStart.emit(this.enabledAdd);
  }

  pause() {
    this.enabledAdd = !this.enabledAdd;
    this.emittingStart.emit(this.enabledAdd);
  }
}
