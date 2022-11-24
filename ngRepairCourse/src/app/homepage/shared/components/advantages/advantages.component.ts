import { Component, OnInit } from '@angular/core';
import { Advantages } from '../../interface/advantages';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit {
advantages:Advantages[] = [ {
  id: '01',
  title: 'ВЫСОКАЯ ЗАРПЛАТА',
  description: 'Увеличьте свой заработок, начав работать в сфере ремонта и обслуживания электронной техники: это всегда востребованная и хорошо оплачиваемая сфера.',
  fillBg: false,
},
{
  id: '02',
  title: 'ОПЫТНЫЕ НАСТАВНИКИ',
  description: 'С реальным опытом работы в сервисных центрах, ремонте и обслуживании электронной техники, научат  ВСЕМ тонкостям своего дела',
  fillBg: false,
},
{
  id: '03',
  title: 'ЛУЧШЕЕ ОБОРУДОВАНИЕ',
  description: 'Полностью оборудованные классы позволят максимально погрузиться в практические занятия под присмотром НАСТОЯЩИХ профи',
  fillBg: false,
},
{
  id: '04',
  title: 'ВОСТРЕБОВАННОСТЬ',
  description: 'специалист решает разноплановые задачи: перепрошивает смартфоны, снимает блокировку, меняет комплектующие (разбитые экраны или вышедшие из строя аккумуляторы).',
  fillBg: true,
},
]
  constructor() { }

  ngOnInit(): void {
  }

}
