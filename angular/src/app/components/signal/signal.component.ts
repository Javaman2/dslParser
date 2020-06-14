import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from "@angular/core";

import {
  HubConnectionBuilder,
  LogLevel,
  HubConnection,
} from "@microsoft/signalr";

@Component({
  selector: "app-signal",
  templateUrl: "./signal.component.html",
  styleUrls: ["./signal.component.css"],
})
export class SignalComponent implements OnInit, AfterViewInit {
  constructor(private cdf: ChangeDetectorRef) {}
  connection: HubConnection;
  messages: Array<string> = new Array();
  stringified: string;
  currentmessage: string = "Welcome!";

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.CheckHubConnection();    
  }
  private async CheckHubConnection() {
    let secure = "https://localhost:44344/myHub";

    if (!this.connection) {
      this.connection = new HubConnectionBuilder()
        .withUrl(secure)
        .configureLogging(LogLevel.Debug)
        .build();
      await this.connection.start().catch((error) => {
        console.log({ signalRComponent: error });
        return;
      });
      this.hookEventHandlers();
    }
  }

  private hookEventHandlers() {
    this.connection.on("ReceiveMessage", (msg, msg2) => {
      let now = Date.now();
      let time = new Date(now).toLocaleTimeString();
      this.messages.unshift(`${time}  |  ${msg}  : ${msg2}`);
      this.stringified = this.messages.reduce((acc, item) => {
        return acc + "\n" + item;
      });
      this.cdf.detectChanges();
    });
    this.connection.on("SendMessage", (msg) => {
      debugger;
    });
  }
  onClearClicked(){
    this.stringified="";
    this.messages = new Array();
  }
  onButtonClicked(msginput: HTMLInputElement) {
    if (!msginput.value) {
      msginput.placeholder = "Please enter message here";
      msginput.style.boxShadow = "0px 0px 20em red";

      setTimeout(() => {
        msginput.style.boxShadow = "";
      }, 1000);

      return;
    }
    this.CheckHubConnection();
    this.connection.invoke("SendMessage", "Signal Component", msginput.value);
    this.currentmessage = "";
  }
}
