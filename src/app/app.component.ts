import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('textcontent', { static: true })
  textcontent: ElementRef<HTMLDivElement>;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.initialAnimations();
  }

  initialAnimations(): void {
    gsap.from(this.document.querySelector('#subhead'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#subhead'),
        toggleActions: 'restart pause resume reset'
      } as gsap.plugins.ScrollTriggerInstanceVars,
      x: 200,
      duration: 0.75,
      opacity: 0.3,
    });
  }
}
