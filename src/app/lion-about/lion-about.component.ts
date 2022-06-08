import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
@Component({
  selector: 'app-lion-about',
  templateUrl: './lion-about.component.html',
  styleUrls: ['./lion-about.component.scss']
})
export class LionAboutComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild("sliderRef") sliderRef: ElementRef<HTMLElement>
  dotHelper: Array<Number> = []
  slider: KeenSliderInstance
  currentSlide: number = 1
  constructor() { }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        loop: true,
        initial: this.currentSlide,
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel
        },
      })
      this.dotHelper = [
        ...Array(this.slider.track.details.slides.length).keys(),
      ]
    })
    setInterval(() => {
      if (this.slider) {
        this.slider.next();
      }
    }, 3000);

  }
  ngOnDestroy(): void {
    if (this.slider) this.slider.destroy();
  }

  ngOnInit(): void {
  }
}
