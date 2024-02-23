import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GetAllFiguresResponse } from 'src/app/interfaces/figures/GetAllFiguresResponse';
import { CreateUserRequest } from 'src/app/interfaces/users/request/CreateUserRequest';
import { FIGURES } from 'src/app/db/db';
import { UserFigureAnswer } from 'src/app/interfaces/figures/UserFigureAnswer';

@Component({
  selector: 'app-habilidades-verbais',
  templateUrl: './habilidades-verbais.component.html',
  styleUrls: ['./habilidades-verbais.component.scss']
})
export class HabilidadesVerbaisComponent implements OnInit {

  isUserRegistered = false;
  instructions = false;
  examples = false;
  startTest = false;
  figureIndex = 0;
  acertos = 0;
  analogiasVerbais = false
  public figuresData: Array<GetAllFiguresResponse> = [];
  public userFigureAnswers: Array<UserFigureAnswer> = [];

  public createUserForm = this.formBuilder.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
    grade: ['', Validators.required],
    school: ['', Validators.required],
    city: ['', Validators.required]
  })

  public userFigureAnswerForm = this.formBuilder.group({
    answer: ['', Validators.required]
  })

  constructor(

    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.figuresData = FIGURES;
    this.instructions = true;
  }

  handleSubmitCreateUser() {
    if (this.createUserForm.valid && this.createUserForm.value ) {
      const createUserRequest: CreateUserRequest = {
        name: this.createUserForm.value.name as string,
        age: this.createUserForm.value.age as string,
        grade: this.createUserForm.value.grade as string,
        school: this.createUserForm.value.school as string,
        city: this.createUserForm.value.city as string,
      }

      localStorage.setItem("User", JSON.stringify(createUserRequest))
      this.isUserRegistered = true
      this.instructions = true;
    }

    this.createUserForm.reset();
  }

  handleSubmitAnswer() {
    if (this.userFigureAnswerForm.valid && this.userFigureAnswerForm.value ) {

      const userAnswer: UserFigureAnswer = {
        figureId: this.figuresData[this.figureIndex].id,
        answer: this.userFigureAnswerForm.value.answer as string,
      }

      this.userFigureAnswers.push(userAnswer)
      this.figureIndex++;
      if (this.figureIndex === this.figuresData.length) {
        this.countAcertos();
      }
      this.userFigureAnswerForm.reset();
    }
  }

  countAcertos() {

    this.userFigureAnswers.forEach((userAnswer) => {
      this.figuresData.forEach((dbAnswer) => {
        if (userAnswer.answer.trim().toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === dbAnswer.answer.trim().toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) {
          this.acertos++;
        }
      })
    })

  }
}
