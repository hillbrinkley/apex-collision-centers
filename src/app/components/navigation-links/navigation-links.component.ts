import { Component, Input } from "@angular/core";

@Component({
  selector: "navigation-links",
  templateUrl: "navigation-links.component.html",
  styleUrls: ["navigation-links.component.css"],
})
export class NavigationLinks {
  @Input()
  text2: string = "Location";
  @Input()
  text3: string = "About";
  @Input()
  rootClassName: string = "";
  @Input()
  text4: string = "FAQ";
  @Input()
  text: string = "Home";
  @Input()
  text1: string = "Services";

  constructor() {}
}
