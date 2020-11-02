import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { ShellComponent } from './containers/shell/shell.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticleListComponent } from './components/article-list/article-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TodosComponent,
    ShellComponent,
    NavBarComponent,
    FooterComponent,
    ArticleListComponent,
  ],
  exports: [
    TodosComponent,
    ShellComponent,
    NavBarComponent,
    FooterComponent,
    ArticleListComponent,
  ],
})
export class UiModule {}
