import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionsService {

  constructor(private client:HttpClient) { }

public sigr(){
  return this.client.get("localhost:44344/myHub");
}
}

