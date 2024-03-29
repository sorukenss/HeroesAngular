import { Component, Input, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../heroes/hero';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;
  
  constructor( private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    window.location.replace('url');
  }
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}
