import { json, type ActionFunctionArgs } from "@remix-run/node";
import { addCategory } from "~/api/categories.server";
import type { CategoryAddable } from "~/shared/models/category.model";
import { validateCategoryToAdd } from "~/api/utils/validations.server";
import { handleError } from "~/api/utils/utils.server";


export async function action({ request, context, params }: ActionFunctionArgs) {
  const body = await request.formData();

  const category: CategoryAddable = {
    name: body.get("name") as string,
    shown: body.get("shown") as any | null
  };

  try {
    await validateCategoryToAdd(category);
  } catch (err: any) {
    return handleError({ message: err.message, error: true });
  }

  try {
    const result = await addCategory(category);
    return json({
      ok: true,
      ...result
    });
  } catch (err: any) {
    return handleError({ message: err.message, error: true });
  }

}