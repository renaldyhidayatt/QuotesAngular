import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-quotes',
  templateUrl: './create-quotes.component.html',
  styleUrls: ['./create-quotes.component.css'],
})
export class CreateQuotesComponent implements OnInit {
  name = '';
  date = '';
  time = '';
  symptoms = '';
  formIncorrect = false;

  @Output() newQuotes = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  addQuotes() {
    if (
      this.name == '' ||
      this.date == '' ||
      this.time == '' ||
      this.symptoms == ''
    ) {
      this.formIncorrect = true;
      return;
    }
    this.formIncorrect = false;

    const Quotes = {
      name: this.name,
      date: this.date,
      time: this.time,
      symptoms: this.symptoms,
    };

    this.newQuotes.emit(Quotes);
    this.reset_s();
  }

  reset_s() {
    this.name = '';
    this.date = '';
    this.time = '';
    this.symptoms;
  }
}
