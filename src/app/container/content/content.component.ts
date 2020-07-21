import { Component, OnInit, Input } from "@angular/core";
import { DatalistService } from "src/app/shared/services/datalist.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
})
export class ContentComponent implements OnInit {
  @Input() category;
  itemList = {};
  dataList = {};
  constructor(private dataService: DatalistService) {}

  ngOnChanges() {
    if (this.category !== "All")
      this.itemList = { ...this.dataService.relationMap[this.category] };
    else this.itemList = { ...this.dataService.relationMap };
    console.log(this.itemList);
  }

  ngOnInit() {
    if (this.category !== "All")
      this.itemList = { ...this.dataService.relationMap[this.category] };
    this.dataList = this.dataService.dataList;
    console.log(this.category);
  }
}
