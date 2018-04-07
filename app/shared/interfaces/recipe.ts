export interface IIngrediants {
    Name?: string;
    Quantity?: number;
    Measure?: string;
}

export interface IRecipe {
    RecipeId?: number;
    RecipeName?: string;
    Ingrediants?: IIngrediants[];
    PreparationMethod?: string;
}