import { Component, OnInit } from '@angular/core';

import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faLinkedinIn = faLinkedinIn
  faGithub = faGithub

  constructor() { }

  ngOnInit(): void {
  }

}
