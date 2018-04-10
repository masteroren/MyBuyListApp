"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var data_service_1 = require("../../shared/services/data.service");
var RecipeComponet = /** @class */ (function () {
    function RecipeComponet(dataService, activatedRoute) {
        this.dataService = dataService;
        this.activatedRoute = activatedRoute;
        this.recipe = {
            RecipeId: null,
            RecipeName: null
        };
    }
    RecipeComponet.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.dataService.getRecipe(this.activatedRoute.snapshot.params['id']).subscribe(function (recipe) {
            _this.recipe = recipe;
        });
    };
    RecipeComponet.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    RecipeComponet = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mbl-recipe',
            templateUrl: 'recipe.component.html'
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute])
    ], RecipeComponet);
    return RecipeComponet;
}());
exports.RecipeComponet = RecipeComponet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlY2lwZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBaUQ7QUFDakQsc0NBQTZEO0FBQzdELG1FQUFpRTtBQVlqRTtJQVNJLHdCQUNZLFdBQXdCLEVBQ3hCLGNBQThCO1FBRDlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVBuQyxXQUFNLEdBQVk7WUFDckIsUUFBUSxFQUFFLElBQUk7WUFDZCxVQUFVLEVBQUUsSUFBSTtTQUNuQixDQUFDO0lBS0YsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBZTtZQUN2RyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBdEJRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBVzJCLDBCQUFXO1lBQ1IsdUJBQWM7T0FYakMsY0FBYyxDQXdCMUI7SUFBRCxxQkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjtcclxuaW1wb3J0IHsgSVJlY2lwZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9yZWNpcGVcIjtcclxuXHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XHJcbmltcG9ydCB7IFRhYlZpZXcsIFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhLCBUYWJWaWV3SXRlbSB9IGZyb20gXCJ1aS90YWItdmlld1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdtYmwtcmVjaXBlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAncmVjaXBlLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVjaXBlQ29tcG9uZXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBwdWJsaWMgcmVjaXBlOiBJUmVjaXBlID0ge1xyXG4gICAgICAgIFJlY2lwZUlkOiBudWxsLFxyXG4gICAgICAgIFJlY2lwZU5hbWU6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsIFxyXG4gICAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldFJlY2lwZSh0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnBhcmFtc1snaWQnXSkuc3Vic2NyaWJlKChyZWNpcGU6IElSZWNpcGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZWNpcGUgPSByZWNpcGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbn0iXX0=