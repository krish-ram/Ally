import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.scss"],
})
export class AccordionComponent implements OnInit {
  @Input() header;
  @Input() itemlist;
  @Input() dataList;
  constructor() {}

  title;
  childItems = [];
  show = true;
  ngOnInit() {
    this.title = this.dataList[this.header].title;
    this.childItems = this.itemlist.map((each) => this.dataList[each]);
  }
}
