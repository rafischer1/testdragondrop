import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HelpersService {
  constructor() {}

  random = () => Math.ceil(Math.random() * 1000);
}
