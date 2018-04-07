"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("../../shared/services/data.service");
var RecipeComponet = /** @class */ (function () {
    function RecipeComponet(dataService) {
        this.dataService = dataService;
        this.subs = [];
        this.recipe = {
            RecipeId: null,
            RecipeName: null
        };
    }
    RecipeComponet.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.push(this.dataService.getRecipe(146).subscribe(function (recipe) {
            _this.recipe = recipe;
        }));
    };
    RecipeComponet.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (sub) { return sub.unsubscribe(); });
    };
    RecipeComponet = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mbl-recipe',
            templateUrl: 'recipe.component.html'
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], RecipeComponet);
    return RecipeComponet;
}());
exports.RecipeComponet = RecipeComponet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlY2lwZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsbUVBQWlFO0FBWWpFO0lBUUksd0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBTnBDLFNBQUksR0FBbUIsRUFBRSxDQUFDO1FBQzNCLFdBQU0sR0FBWTtZQUNyQixRQUFRLEVBQUUsSUFBSTtZQUNkLFVBQVUsRUFBRSxJQUFJO1NBQ25CLENBQUM7SUFJRixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBZTtZQUNyRSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFwQlEsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FTbUMsMEJBQVc7T0FSbkMsY0FBYyxDQXNCMUI7SUFBRCxxQkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7XHJcbmltcG9ydCB7IElSZWNpcGUgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2ludGVyZmFjZXMvcmVjaXBlXCI7XHJcblxyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xyXG5pbXBvcnQgeyBUYWJWaWV3LCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSwgVGFiVmlld0l0ZW0gfSBmcm9tIFwidWkvdGFiLXZpZXdcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbWJsLXJlY2lwZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3JlY2lwZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlY2lwZUNvbXBvbmV0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIHByaXZhdGUgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuICAgIHB1YmxpYyByZWNpcGU6IElSZWNpcGUgPSB7XHJcbiAgICAgICAgUmVjaXBlSWQ6IG51bGwsXHJcbiAgICAgICAgUmVjaXBlTmFtZTogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmRhdGFTZXJ2aWNlLmdldFJlY2lwZSgxNDYpLnN1YnNjcmliZSgocmVjaXBlOiBJUmVjaXBlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVjaXBlID0gcmVjaXBlO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==