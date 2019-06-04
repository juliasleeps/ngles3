import { Injectable } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

@Injectable()
// @Injectable({
//   providedIn: 'root'
// })
export class SomeService {

  private myName: string = 'Yuka'
  constructor(
    private http: HttpClientModule
  ) {
    console.log('create')
  }

  public getName(): string {
    return this.myName;
  }
}
