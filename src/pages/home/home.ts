/**
 * Created by Dengshuo on 2017-11-03.
 */
import {Component} from '@angular/core';
import {FirstMainPage} from '../firstMain/firstMain';
import {SecondMainPage} from '../secondMain/secondMain';
import {ThirdMainPage} from '../thirdMain/thirdMain';


@Component({
  template: `
    <ion-tabs class="tabs-icon">
      <ion-tab tabIcon="home" tabTitle="首页" [root]="root1"></ion-tab>
      <ion-tab tabIcon="car" tabTitle="选车" [root]="root2"></ion-tab>
      <ion-tab tabIcon="people" tabTitle="论坛" [root]="root3"></ion-tab>
    </ion-tabs>
  `
})
export class HomePage {
  root1=FirstMainPage;
  root2=SecondMainPage;
  root3=ThirdMainPage;
}