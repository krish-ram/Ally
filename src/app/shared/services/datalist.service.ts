import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import * as _ from "lodash";

interface ListItem {
  id: string;
  category: string;
  title: string;
  metric_name: string;
  metric_start: string;
  metric_target: string;
  parent_objective_id: string;
  archived: string;
}

@Injectable({
  providedIn: "root",
})
export class DatalistService {
  constructor(private http: HttpClient) {}
  fetchURL = "/sample-okrs/db.json";

  categories = [];
  relationMap = {};
  dataList = {};

  getDataList = () => {
    return this.http.get(environment.baseUrl + this.fetchURL);
  };

  destructureData = (list: Array<ListItem>) => {
    for (let item of list) {
      //Skip all archived records
      if (!item.archived) {
        //Categorize the data
        if (!_.includes(this.categories, item.category)) {
          this.categories.push(item.category);
          this.relationMap[item.category] = {};
        }

        //Update parent child map
        if (!item.parent_objective_id)
          this.relationMap[item.category][item.id] = [];
        else
          this.relationMap[item.category][item.parent_objective_id].push(
            item.id
          );

        //Maintain a map of the whole data
        this.dataList[item.id] = item;
      }
    }
  };
}
