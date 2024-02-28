import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ANALOGIES } from 'src/app/db/db';
import { GetAllAnalogias } from 'src/app/interfaces/analogias/GetAllAnalogias';
import { UserAnalogyAnswer } from 'src/app/interfaces/analogias/UserAnalogyAnswer';

@Component({
  selector: 'app-analogias-verbais',
  templateUrl: './analogias-verbais.component.html',
  styleUrls: ['./analogias-verbais.component.scss']
})
export class AnalogiasVerbaisComponent implements OnInit {
  isUserRegistered = false;
  instructions = true;
  examples = false;
  startTest = false;
  analogiaIndex = 2;
  acertos = 0;
  analogiasVerbais = false;

  public newArray: Array<GetAllAnalogias> = []
  public analogiasData: Array<GetAllAnalogias> = []
  public userAnalogyAnswers: Array<UserAnalogyAnswer> = []

  public userAnswerForm = this.formBuilder.group({
    answer: ["", Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.analogiasData = ANALOGIES
  }

  handleSubmitAnswer() {
    if (this.userAnswerForm.valid && this.userAnswerForm.value) {
      const userAnswer: UserAnalogyAnswer = {
        analogyId: this.analogiasData[this.analogiaIndex].id,
        answer: this.userAnswerForm.value.answer as string,
      }

      this.userAnalogyAnswers.push(userAnswer)
      this.analogiaIndex++;
      if (this.analogiaIndex === this.analogiasData.length) {
        this.countAcertos();
      }
      this.userAnswerForm.reset();

    }
  }

  handleReturnQuestion() {
    if (this.analogiaIndex === 2) return
    this.userAnalogyAnswers.pop();
    this.analogiaIndex--
    //console.log(this.userAnalogyAnswers)
  }

  countAcertos() {
    this.analogiasData.slice(2).forEach((sentence) => { // For Each começando pela 2 posição do array, ignorando os exemplos
      this.userAnalogyAnswers.forEach((userAnswer) => {
        if (sentence.rightAnswer === userAnswer.answer) {
          this.acertos++
        }
      })
    })
  }

}
