import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { HotObservable } from 'rxjs/internal/testing/HotObservable';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective implements OnInit {
  @Input('appColor') public surlignageColor!: {
    color: string;
    backgroundColor: string;
  };

  @HostListener('mouseenter', ['$event']) private surligne(event: MouseEvent) {
    console.log('event :', event);
    console.log(this.surlignageColor);

    this.el.nativeElement.style.backgroundColor =
      this.surlignageColor.backgroundColor;
    this.el.nativeElement.style.color = this.surlignageColor.color;
  }

  //   @HostListener('mouseleave') private normal() {
  //     this.el.nativeElement.style.backgroundColor = 'transparent';
  //   }

  //   // écoute le click sur la window entière
  //   @HostListener('window:click', ['$event']) private test(event: MouseEvent) {
  //     console.log(event);
  //   }

  //   @HostBinding('class')
  //   public class!: string;
  //   @HostBinding('attr.role') private role!: string;
  //   @HostBinding('style.backgroundColor') private color!: string;

  constructor(private el: ElementRef<any>) {}

  ngOnInit(): void {
    // this.el.nativeElement.style.color = 'red';
    // console.log(this.class);
    // this.class = 'test';
    // this.role = 'admin';
    // this.color = 'orange';
  }
}
