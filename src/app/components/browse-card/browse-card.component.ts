import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-browse-card',
  templateUrl: './browse-card.component.html',
  styleUrls: ['./browse-card.component.css']
})
export class BrowseCardComponent {
  @Input() bgColor!: string;
  @Input() textColor!: string;
  @Input() title!: string;

  ngOnInit(): void {}
}
