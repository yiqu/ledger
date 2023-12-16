import { type ActionFunctionArgs, json } from "@remix-run/node";
import invariant from "tiny-invariant";
import { addExpenseComment } from "~/api/comments.server";
import { handleError } from "~/api/utils/utils.server";
import type { ExpenseCommentInput } from "~/shared/models/comment.model";

export async function action({ request, context, params }: ActionFunctionArgs) {
  const body = await request.formData();
  const expenseId = params.expenseId;
  invariant(expenseId, "Expected expenseId in params to be defined");

  const comment: ExpenseCommentInput = {
    comment: body.get("comment") as string,
    expenseId: expenseId,
  };

  try {
    await addExpenseComment(comment);
    return json({ success: true });
  } catch (err: any) {
    return handleError({ message: err.message, error: true });
  }

}