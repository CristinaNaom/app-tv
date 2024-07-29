import { Component, OnInit } from '@angular/core';
import { TvService } from '../../services/tv.service';
import { Show } from '../../models/show';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  shows: Show[] = [];

  constructor(private ts: TvService) { }
  ngOnInit(): void {
    this.ts.getShows().subscribe(shows => this.shows = shows);
  }
}
