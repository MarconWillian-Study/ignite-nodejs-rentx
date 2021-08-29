import { Router } from 'express';

import { CategoriesRepositories } from '../repositories/CategoriesRepositories';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepositories();

categoriesRoutes.get('/', (request, response) => {
  const allCategories = categoriesRepository.list();

  return response.status(201).json(allCategories);
});

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return response.status(400).json({ error: 'Category already exist' });
  }

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

export { categoriesRoutes };
