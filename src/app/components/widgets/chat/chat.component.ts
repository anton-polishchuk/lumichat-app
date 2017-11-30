import {Component, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public messagesDemo: {desktop: [{owner: any, text: string}], mobile: [{owner: any, text: string}]} = {
    desktop: [
      {owner: 1, text: "You are so beautiful!"},
      {owner: 1, text: "Do you have any specific idea, where weshould travel this time? Any wishes?"},
      {owner: 0, text: "Let's do it! Well. i've always wanted to travel to Paris, but haven't been there so far..."},
      {owner: 0, text: "Let's do it! Well. i've always wanted to travel to Paris, but haven't been there so far..."},
    ], mobile: [
      {owner: 1, text: "You are so beautiful!"},
      {owner: 0, text: "Let's do it! Well. i've always wanted to travel to Paris, but haven't been there so far..."},
    ]
  };
  public chatRoom = [
    {owner: "Blackie72", text: "hello Bitty"},
    {owner: 3, text: "Topic: top off goal! 33 to go! TIP MENU IN WHITEBOARD."},
    {owner: "DiDDiEBoss", text: "Good morning Bitty"},
    {owner: "Blackie72", text: "Please rate 5 stars and admire this beautiful gorgeous woman"},
    {owner: "bpete013", text: "natural?"},
    {owner: "DiDDiEBoss", text: "how are you?"},
    {owner: 3, text: "DoctorTongue has tipped Nadya Nabakova 10 tokens: 'vey nice'"},
    {owner: "DoctorTongue", text: "definitely going to bookmark u"},
    {owner: "rgalopo", text: "hi beauty"},
    {owner: "DiDDiEBoss", text: "having a lazy sunday in ur undies today?"},
    {owner: "mamede_UK", text: "sooooo hot, pm for proposal"},
    {owner: "rgalopo", text: "do you have any toy to play?"},
    {owner: "DoctorTongue", text: "There are enough of us here, anyone want to help her reach her topless goal?"},
    {owner: 3, text: "DoctorTongue has tipped Nadya Nabakova 5 tokens"},
    {owner: "DoctorTongue", text: "ur look is great, totally girl next door and beautiful"},
    {owner: 3, text: "MrFox1023 has tipped Nadya Nabakova 12 tokens"},
    {owner: "MrFox1023", text: "Wow beautiful. Never seen u b4. Fyi I'm mobile now with no sound"},
    {owner: "FapiChulo", text: "damn girl"},
    ];

  public messages = this.detectMobile();

  public text = "";

  constructor() {
   this.sheduleMsg(0);
  }

  ngOnInit() {
  }


  private detectMobile() {
    if (window.innerWidth <= 768) {
      return this.messagesDemo.mobile
    }
    else {
      return this.messagesDemo.desktop
    }
  }

  public sendMessage(msg) {
    if (msg.length) {
      this.text = "";
      this.messages.push({owner: 1, text: msg});
      let objDiv = document.getElementById("chat");
      setTimeout(() => {
        objDiv.scrollTop = objDiv.scrollHeight;
      }, 200);
      setTimeout(() => {
        this.messages.push({owner: 0, text: "Oh, that's nice!"});
      }, 1000);
      setTimeout(() => {
        objDiv.scrollTop = objDiv.scrollHeight;
      }, 1100);
    }
  }

  public sheduleMsg(i) {
    setTimeout(() => {
      this.messages.push(this.chatRoom[i]);
      setTimeout(() => {
        let objDiv = document.getElementById("chat");
        objDiv.scrollTop = objDiv.scrollHeight;
      }, 200);
      i++;
      if (i >= this.chatRoom.length) {
        i = 0;
      }
      this.sheduleMsg(i)
    }, 10000)
  };

  public openPopup() {
    document.getElementById("subscribe").style.visibility="visible";
  }


}
