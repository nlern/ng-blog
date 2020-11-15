import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'myorg-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
