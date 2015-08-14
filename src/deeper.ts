//http://victorsavkin.com/post/119943127151/angular-2-template-syntax
import {Component, View} from "angular2/angular2";
import {HashLocationStrategy, LocationStrategy, Router, RouterLink, RouteConfig, RouterOutlet, routerInjectables} from "angular2/router";

@Component({
    selector: "deeper2"
})
@View({
    template:`
        <div class="deeper">
            This is deeper2
        </div>
    `
})
class Deeper2{
    name:string = "this is deeper2";
}

@Component({
    selector: "deeper3"
})
@View({
    template:`
        <div class="deeper">
            This is deeper3
        </div>
    `
})
class Deeper3{
    name:string = "this is deeper3";
}


@RouteConfig([
    {path: '/deeper2', as: "deeper2", component:Deeper2},
    {path: '/deeper3', as: "deeper3", component:Deeper3}
])
@Component({
    selector: "deeper"
})
@View({
    template:`
        <div class="deeper">
            This is deeper
            <router-outlet></router-outlet>
        </div>
    `
})
export default class Deeper{
    name:string = "this is deeper";
}
//<a [router-link]="['/deeper/...']>Deeper</a>