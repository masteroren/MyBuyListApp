import { ListView } from 'tns-core-modules/ui/list-view';
import { DataService } from './../../shared/services/data.service';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { IRecipe } from "../../shared/interfaces/recipe";
import { Observable } from 'rxjs/Observable';
import { GestureEventData } from 'tns-core-modules/ui/gestures/gestures';
import { Subscription } from 'rxjs/Subscription';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    moduleId: module.id,
    selector: 'mbl-recipes',
    templateUrl: 'recipes.component.html'
})

export class RecipesComponent implements OnInit {

    public recipes: Observable<IRecipe[]>;

    constructor(private dataService: DataService, private routerExtentions: RouterExtensions) { }

    ngOnInit() {
        this.recipes = this.dataService.getRecipes();
    }

    onTapRecipe(args) {
        this.routerExtentions.navigate(['recipe', (<IRecipe>(args.object.items[args.index])).RecipeId])
    }
}