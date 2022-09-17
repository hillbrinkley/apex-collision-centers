import { Component, Input } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "navbar.component.html",
  styleUrls: ["navbar.component.css"],
})
export class Navbar {
  @Input()
  image_src: string = "/playground_assets/conecept-logo-01.png";
  @Input()
  image_src1: string = "/playground_assets/conecept-logo-01.png";
  @Input()
  image_alt: string = "logo";
  @Input()
  image_alt1: string = "image";
  @Input()
  text: string = "Follow us";
  @Input()
  PrimaryBtn: string = "Call us: (434) 434-4738";
  @Input()
  PrimaryBtn1: string = "Get started";

  constructor() {}
}
