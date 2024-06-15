import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent implements OnInit {
  @Input() name: String = '';
  @Input() playerActive:boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
