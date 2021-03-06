import observable = require("data/observable");
import pages = require("ui/page");
import viewModule = require("ui/core/view");
import color = require("color");

var view: viewModule.View;

export function pageLoaded(args: observable.EventData) {
    var page = <pages.Page>args.object;
    view = page.getViewById<viewModule.View>("view");
}

export function onAnimate(args: observable.EventData) {
    view.animate({
        backgroundColor: new color.Color("#3D5AFE"),
        duration: 3000
    });
}

export function onReset(args: observable.EventData) {
    view.backgroundColor = new color.Color("White");
}
