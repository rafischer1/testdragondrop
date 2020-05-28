import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HelpersService {
  constructor() {}

  urls: string[] = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcST5FblLN-BcLYlCJccsUNhI580Nu_mvQ9YPM_gKu7Btfge1qaF&usqp=CAU",
    "https://appian.com/assets/sites/4/2019/02/blog-generic-healthcare-pharma.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnD-dTyWkOxWgcYwhrxKlFHaL0USZ9c7CIByACIKKsz90GFXMG&usqp=CAU"
  ];

  random = () => Math.ceil(Math.random() * 1000);

  randomUrl = () => this.urls[Math.floor(Math.random() * this.urls.length)];
}
