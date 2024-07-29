import { Component, OnInit } from '@angular/core';
import { TvService } from '../../services/tv.service';
import { ActivatedRoute } from '@angular/router';
import { Show } from '../../models/show';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.css'
})
export class ShowDetailComponent implements OnInit {
  show?: Show;
  show$: Observable<Show> | undefined;

  constructor(private ts: TvService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ts.getShowById(+id!).subscribe(s => {
      this.show = s;
    })

    this.show$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.ts.getShowById(id);
      })
    );
  }


}
