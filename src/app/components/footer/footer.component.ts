import {
  Component,
  Input,
} from "@angular/core";
import { ViewportScroller } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-footer",
  templateUrl: "footer.component.html",
  styleUrls: ["footer.component.css"],
})
export class Footer {
  constructor(
    private scroller: ViewportScroller,
    private router: Router
  ) {}
  ngOnInit() {
    this.router.navigate(["/"]);
  }

  home() {
    document
      .getElementById("home-scroll")
      .scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
  }
}
