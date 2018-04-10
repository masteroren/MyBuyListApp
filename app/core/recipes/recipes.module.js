"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var recipes_component_1 = require("./recipes.component");
var core_1 = require("@angular/core");
var recipes_item_component_1 = require("./recipes-item/recipes-item.component");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var common_1 = require("@angular/common");
var RecipesModule = /** @class */ (function () {
    function RecipesModule() {
    }
    RecipesModule = __decorate([
        core_1.NgModule({
            declarations: [
                recipes_component_1.RecipesComponent,
                recipes_item_component_1.RecipesItemComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                common_1.CommonModule
            ]
        })
    ], RecipesModule);
    return RecipesModule;
}());
exports.RecipesModule = RecipesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBlcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWNpcGVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlEQUF1RDtBQUN2RCxzQ0FBeUM7QUFDekMsZ0ZBQTZFO0FBQzdFLGdGQUE4RTtBQUM5RSwwQ0FBK0M7QUFhL0M7SUFBQTtJQUE2QixDQUFDO0lBQWpCLGFBQWE7UUFYekIsZUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFO2dCQUNWLG9DQUFnQjtnQkFDaEIsNkNBQW9CO2FBQ3ZCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIscUJBQVk7YUFDZjtTQUNKLENBQUM7T0FFVyxhQUFhLENBQUk7SUFBRCxvQkFBQztDQUFBLEFBQTlCLElBQThCO0FBQWpCLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVjaXBlc0NvbXBvbmVudCB9IGZyb20gJy4vcmVjaXBlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJlY2lwZXNJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9yZWNpcGVzLWl0ZW0vcmVjaXBlcy1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFJlY2lwZXNDb21wb25lbnQsXHJcbiAgICAgICAgUmVjaXBlc0l0ZW1Db21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIENvbW1vbk1vZHVsZVxyXG4gICAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlY2lwZXNNb2R1bGUgeyB9Il19