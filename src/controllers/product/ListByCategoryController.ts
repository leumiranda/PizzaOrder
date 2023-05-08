import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/category/ListByCategoryService";

class ListByCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;
    // de fato é uma string, 

    const listByCategory = new ListByCategoryService();

    const products = await listByCategory.execute({
      category_id,
    });

    return res.json(products)
  }
}

export { ListByCategoryController }