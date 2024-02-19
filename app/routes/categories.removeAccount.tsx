import { json, type ActionFunctionArgs } from "@remix-run/node";
import { removeAccountFromCategoryByCategoryId } from "~/api/categories.server";
import { handleError } from "~/api/utils/utils.server";
import invariant from "tiny-invariant";

export async function action({ request, context, params }: ActionFunctionArgs) {
  const body = await request.formData();
  const categoryName = body.get('categoryName') as string | null;
  const categoryId = body.get('categoryId') as string | null;
  const accountId = body.get('accountId') as string | null;
  invariant(categoryId, 'Category ID is required');
  invariant(accountId, 'Account ID is required');

  try {
    const result = await removeAccountFromCategoryByCategoryId(categoryId, accountId);
    return json({
      showToast: true,
      status: 200,
      error: false,
      ok: true,
      message: `${result.name} has been removed from ${categoryName}.`
    });
  } catch (err: any) {
    return handleError({ message: err.message, error: true });
  }
}