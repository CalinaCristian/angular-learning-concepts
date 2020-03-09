import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-generic-item-view',
  templateUrl: './generic-item-view.component.html',
  styleUrls: ['./generic-item-view.component.scss']
})
export class GenericItemViewComponent implements OnInit {
  @Input() items: string[];

  @ContentChild('itemTemplate') itemTemplateRef: TemplateRef<any>

  constructor() { }

  ngOnInit(): void {
  }

}
