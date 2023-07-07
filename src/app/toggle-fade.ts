import { animate, style, transition, trigger } from '@angular/animations';

export const toggleFade = trigger('fade', [
  transition('*<=>*', [
    style({
      opacity: 0,
      transform: 'translateX(100%)',
    }),
    animate('0.5s', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
]);
