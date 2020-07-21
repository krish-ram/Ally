import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges,
} from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit, OnChanges {
  @Input() categories = [];
  @Output() onSelect = new EventEmitter();

  category: string;
  constructor() {}

  ngOnChanges() {
    this.category = this.categories[0];
  }

  ngOnInit() {}

  onSelection(category) {
    this.category = category;
    this.onSelect.emit(category);
  }
}
