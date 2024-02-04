import { json, type ActionFunctionArgs } from "@remix-run/node";
import { editCategory } from "~/api/categories.server";
import type { CategoryEditable } from "~/shared/models/category.model";
import { validateCategoryToAdd } from "~/api/utils/validations.server";
import { handleError } from "~/api/utils/utils.server";


export async function action({ request, context, params }: ActionFunctionArgs) {
  const body = await request.formData();

  const category: CategoryEditable = {
    id: body.get("id") as string,
    name: body.get("name") as string,
    shown: (body.get("shown") as boolean | null) === null ? false : body.get("shown") as boolean | null
  };

  try {
    await validateCategoryToAdd(category);
  } catch (err: any) {
    return handleError({ message: err.message, error: true });
  }

  try {
    const result = await editCategory(category);
    return json({
      ok: true,
      ...result
    });
  } catch (err: any) {
    return handleError({ message: err.message, error: true });
  }

}