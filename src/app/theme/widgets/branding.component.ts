import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <a class="d-inline-block text-nowrap r-full text-reset" href="/">
      <img src="./assets/images/fyr3Logo.png" class="brand-logo align-middle m-2 r-full" alt="logo" />
      <!-- <span class="align-middle f-s-16 f-w-500 m-x-8 hide-small">FyR3</span> -->
    </a>
  `,
  styles: [
    `
      .brand-logo {
        // width: 30px;
        height: 30px;
      }

      a {
        text-decoration: none;
      }
    `,
  ],
})
export class BrandingComponent {}
