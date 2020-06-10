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

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.CheckHubConnection();
    this.messages.push("Welcome!");
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

      this.connection.on("ReceiveMessage", (msg) => {
        this.messages.unshift(msg);
        this.stringified = this.messages.reduce((acc, item) => {
          return acc + "\n" + item;
        });
        this.cdf.detectChanges();
      });
      this.connection.on("SendMessage", (msg) => {});
    }
  }

  async onButtonClicked(input: HTMLInputElement) {
    await this.CheckHubConnection();
    console.log(this.connection);
    this.connection.invoke("SendMessage", "clientstation1", "test");
  }
}
