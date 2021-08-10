import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-quotes',
  templateUrl: './list-quotes.component.html',
  styleUrls: ['./list-quotes.component.css'],
})
export class ListQuotesComponent implements OnInit {
  @Input() listQuotes: any;
  @Output() deleteQuotes = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  deleteQuotesC(index: number) {
    this.deleteQuotes.emit(index);
  }
}
