import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Observable, of, switchMap } from 'rxjs';
import { Show } from '../../models/show';
import { TvService } from '../../services/tv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  searchControl = new FormControl();
  shows$: Observable<Show[]> | undefined;

  constructor(private ts: TvService, private router: Router) { }
  ngOnInit(): void {
    this.shows$ = this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(name => name ? this.ts.getShowsByName(name) : of([]))
    );

    // Per debug: logga i dati ricevuti
    this.shows$.subscribe(shows => {
      console.log('Shows:', shows); // Log per verificare i dati
    });

  }
  navigateToShowDetail(id: number): void {
    this.router.navigate(['/shows', id]);
  }

}
