"use strict";(self.webpackChunkhabilidades_verbais=self.webpackChunkhabilidades_verbais||[]).push([[420],{7420:(b,c,r)=>{r.r(c),r.d(c,{AnalogiasVerbaisModule:()=>A});var l=r(6814),d=r(72),s=r(95),u=r(7466),e=r(4946);function g(i,o){if(1&i){const n=e.EpF();e.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div",6)(5,"h5",7),e._uU(6,"Instru\xe7\xf5es"),e.qZA(),e.TgZ(7,"p",8),e._uU(8,"Leia atentamente os itens, escolha a op\xe7\xe3o de resposta que melhor complete a compara\xe7\xe3o ou a analogia entre as palavras propostas."),e._UZ(9,"br")(10,"br"),e._uU(11,"Esta atividade tem tempo marcado para ser realizada. "),e._UZ(12,"br")(13,"br"),e._uU(14,"Responda o m\xe1ximo que conseguir e siga em frente! Quando voc\xea n\xe3o souber, pule o item e retorne depois, se houver tempo."),e._UZ(15,"br")(16,"br"),e._uU(17," Veja os exemplos de preenchimentos dos itens a seguir."),e.qZA(),e.TgZ(18,"div",9)(19,"button",10),e.NdJ("click",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.examples=!a.examples)}),e._uU(20,"Iniciar Teste"),e.qZA()()()()()()()}}function p(i,o){if(1&i&&(e.TgZ(0,"div",19)(1,"div",6)(2,"div",20),e._UZ(3,"input",21),e.TgZ(4,"label",22),e._uU(5),e.qZA()()()()),2&i){const n=o.$implicit,t=e.oxw(2);e.xp6(3),e.Q6J("checked",t.analogiasData[t.analogiaIndex-2].rightAnswer===n),e.xp6(2),e.hij(" ",n," ")}}function m(i,o){if(1&i&&(e.TgZ(0,"div",19)(1,"div",6)(2,"div",20),e._UZ(3,"input",21),e.TgZ(4,"label",22),e._uU(5),e.qZA()()()()),2&i){const n=o.$implicit,t=e.oxw(2);e.xp6(3),e.Q6J("checked",t.analogiasData[t.analogiaIndex-1].rightAnswer===n),e.xp6(2),e.hij(" ",n," ")}}function v(i,o){if(1&i){const n=e.EpF();e.TgZ(0,"div",2)(1,"div",3)(2,"div",11)(3,"div",5)(4,"div",6)(5,"h5",12),e._uU(6,"Exemplos"),e.qZA(),e.TgZ(7,"div",3)(8,"div",13)(9,"div",14)(10,"div",6),e._UZ(11,"p",15),e.YNc(12,p,6,2,"div",16),e.qZA()()(),e.TgZ(13,"div",17)(14,"div",14)(15,"div",6),e._UZ(16,"p",15),e.YNc(17,m,6,2,"div",16),e.qZA()()()(),e.TgZ(18,"div",18)(19,"button",10),e.NdJ("click",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.startTest=!a.startTest)}),e._uU(20,"Pr\xf3ximo"),e.qZA()()()()()()()}if(2&i){const n=e.oxw();e.xp6(11),e.Q6J("innerHTML",n.analogiasData[n.analogiaIndex-2].sentence,e.oJD),e.xp6(1),e.Q6J("ngForOf",n.analogiasData[n.analogiaIndex-2].possibleAnswers),e.xp6(4),e.Q6J("innerHTML",n.analogiasData[n.analogiaIndex-1].sentence,e.oJD),e.xp6(1),e.Q6J("ngForOf",n.analogiasData[n.analogiaIndex-1].possibleAnswers)}}function f(i,o){if(1&i&&(e.TgZ(0,"div",19)(1,"div",6)(2,"div",20),e._UZ(3,"input",28),e.TgZ(4,"label",29),e._uU(5),e.qZA()()()()),2&i){const n=o.$implicit;e.xp6(3),e.Q6J("value",n),e.xp6(2),e.hij(" ",n," ")}}function h(i,o){if(1&i){const n=e.EpF();e.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",23)(4,"div",6)(5,"form",24)(6,"div",14)(7,"div",6),e._UZ(8,"p",15),e.YNc(9,f,6,2,"div",16),e.qZA()(),e.TgZ(10,"div",3)(11,"div",25)(12,"div",26)(13,"button",27),e.NdJ("click",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.handleReturnQuestion())}),e._uU(14,"Anterior"),e.qZA()()(),e.TgZ(15,"div",25)(16,"div",26)(17,"button",27),e.NdJ("click",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.handleSubmitAnswer())}),e._uU(18,"Pr\xf3ximo"),e.qZA()()()()()()()()()()}if(2&i){const n=e.oxw();e.xp6(5),e.Q6J("formGroup",n.userAnswerForm),e.xp6(3),e.Q6J("innerHTML",n.analogiaIndex-1+") "+n.analogiasData[n.analogiaIndex].sentence,e.oJD),e.xp6(1),e.Q6J("ngForOf",n.analogiasData[n.analogiaIndex].possibleAnswers)}}function _(i,o){1&i&&(e.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div",6)(5,"div",3)(6,"h5",30),e._uU(7,"Teste Finalizado!"),e.qZA(),e.TgZ(8,"a",31),e._uU(9,"Retornar para o menu principal"),e.qZA()()()()()()())}const x=[{path:"",component:(()=>{class i{constructor(n){this.formBuilder=n,this.isUserRegistered=!1,this.instructions=!0,this.examples=!1,this.startTest=!1,this.analogiaIndex=2,this.acertos=0,this.analogiasVerbais=!1,this.newArray=[],this.analogiasData=[],this.userAnalogyAnswers=[],this.userAnswerForm=this.formBuilder.group({answer:["",s.kI.required]})}ngOnInit(){this.analogiasData=u.s}handleSubmitAnswer(){this.userAnswerForm.valid&&this.userAnswerForm.value&&(this.userAnalogyAnswers.push({analogyId:this.analogiasData[this.analogiaIndex].id,answer:this.userAnswerForm.value.answer}),this.analogiaIndex++,this.analogiaIndex===this.analogiasData.length&&this.countAcertos(),this.userAnswerForm.reset())}handleReturnQuestion(){2!==this.analogiaIndex&&(this.userAnalogyAnswers.pop(),this.analogiaIndex--)}countAcertos(){this.analogiasData.slice(2).forEach(n=>{this.userAnalogyAnswers.forEach(t=>{n.rightAnswer===t.answer&&this.acertos++})})}static#e=this.\u0275fac=function(t){return new(t||i)(e.Y36(s.qu))};static#n=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-analogias-verbais"]],decls:5,vars:4,consts:[[1,"body"],["class","container d-flex align-items-center justify-content-center min-vh-100",4,"ngIf"],[1,"container","d-flex","align-items-center","justify-content-center","min-vh-100"],[1,"row"],["align","justify",1,"col"],[1,"card","p-2",2,"width","100%"],[1,"card-body"],[1,"card-title","strong","d-flex","justify-content-center"],[1,"card-text"],[1,"d-flex","flex-row-reverse"],[1,"btn","btn-primary",3,"click"],["align","justify",1,"col-sm-12","col-md-12","col-lg-6","col-xl-6","w-100"],[1,"card-title","strong","d-flex","justify-content-center","mb-3"],[1,"col-sm-12","col-md-12","col-lg-6","col-xl-6","mb-3"],[1,"card"],[1,"card-text","mb-3",3,"innerHTML"],["class","card mb-2",4,"ngFor","ngForOf"],[1,"col-sm-12","col-md-12","col-lg-6","col-xl-6"],[1,"d-flex","justify-content-center","align-items-center","mt-2"],[1,"card","mb-2"],[1,"form-check"],["type","radio","disabled","",1,"form-check-input",3,"checked"],[1,"form-check-label"],[1,"card","p-1","d-flex","justify-content-center","align-items-center",2,"width","100%"],[3,"formGroup"],[1,"col-6"],[1,"d-flex","justify-content-center","align-items-center","mt-3"],[1,"btn","btn-primary","w-100",3,"click"],["type","radio","name","answer","formControlName","answer",1,"form-check-input",3,"value"],["for","answer",1,"form-check-label"],[1,"card-title","strong","d-flex","justify-content-center","align-content-center"],["routerLink","/",1,"btn","btn-primary","d-flex","justify-content-center","align-content-center"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e.YNc(1,g,21,0,"div",1),e.YNc(2,v,21,4,"div",1),e.YNc(3,h,19,3,"div",1),e.YNc(4,_,10,0,"div",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",a.instructions&&!a.examples),e.xp6(1),e.Q6J("ngIf",a.examples&&!a.startTest),e.xp6(1),e.Q6J("ngIf",a.startTest&&a.analogiaIndex<a.analogiasData.length),e.xp6(1),e.Q6J("ngIf",a.analogiaIndex===a.analogiasData.length))},dependencies:[l.sg,l.O5,d.rH,s._Y,s.Fj,s._,s.JJ,s.JL,s.sg,s.u],styles:[".body[_ngcontent-%COMP%]{height:100vh;background-color:#4a98f7;overflow:auto}"]})}return i})()}];let A=(()=>{class i{static#e=this.\u0275fac=function(t){return new(t||i)};static#n=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[l.ez,d.Bz.forChild(x),s.u5,s.UX]})}return i})()}}]);