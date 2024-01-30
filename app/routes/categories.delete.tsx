import { json, type ActionFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { deleteCategory } from "~/api/categories.server";
import { handleError } from "~/api/utils/utils.server";

export async function action({ request, context, params }: ActionFunctionArgs) {
  const body = await request.formData();
  const categoryId = body.get('id') as string | null;
  invariant(categoryId, "Expected account id in body to be defined");

  if (request.method === 'DELETE') {
    console.log('categoryId', categoryId);
    try {
      await deleteCategory(categoryId);
    } catch (err: any) {
      return handleError({ message: err.message, error: true, showToast: true });
    }
  }

  return json({ ok: true, message: 'Category deleted.' });
}
