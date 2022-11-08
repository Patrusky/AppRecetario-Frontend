export interface Recipes {
  id: string;
  title: string;
  description: string;
  elaboration: string[];
  ingredients: string [];
  time: string;
  rations: number;
  imagen: string,
}
export interface CreateRecipesDto extends Omit<Recipes, 'id'>{}
export interface UpdateRecipesDto extends Partial<CreateRecipesDto>{}
