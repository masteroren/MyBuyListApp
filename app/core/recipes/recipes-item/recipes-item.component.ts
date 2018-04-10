import { OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { IRecipe } from '../../../shared/interfaces/recipe';

@Component({
    moduleId: module.id,
    selector: 'recipes-item',
    templateUrl: 'recipes-item.component.html',
    styleUrls: ['recipes-item.component.scss']
})
export class RecipesItemComponent {

    @Input() recipe: IRecipe;

}