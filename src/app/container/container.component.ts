import { Component, OnInit } from "@angular/core";
import { DatalistService } from "../shared/services/datalist.service";

@Component({
  selector: "app-container",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.scss"],
})
export class ContainerComponent implements OnInit {
  constructor(private dataService: DatalistService) {}
  categories = [];
  selectedDataList = {};
  dataList: object = {};
  selectedCategory: string;

  ngOnInit() {
    this.dataService.getDataList().subscribe((response: any) => {
      this.dataService.destructureData(response.data);
      this.categories = [...this.dataService.categories];
      this.selectedDataList = this.dataService.relationMap;
      this.dataList = Object.assign({}, this.dataService.dataList);
      this.selectedCategory = this.categories[0];
    });
  }

  onCategorySelect(event) {
    this.selectedCategory = event;
  }
}
