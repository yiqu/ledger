import { json } from "@remix-run/node";
import useScreenSize from "~/shared/hooks/useIsMobile";
import LayoutWithGutter from "~/shared/layouts/LayoutWithGutter";
import type { ShouldRevalidateFunction } from "@remix-run/react";
import { Outlet, useLocation, useNavigate, useParams, useSearchParams, useSubmit } from "@remix-run/react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import type { ActionFunctionArgs, HeadersFunction, LoaderFunctionArgs } from "@remix-run/node";
import AccountNavBar from "~/components/navbar/AccountNavBar";
import StickyToolbar from "~/shared/toolbar/StickyToolbar";
import type { HttpResponsePaged } from "~/shared/models/http.model";
import { convertDateDisplay } from "~/api/utils/date.server";
import { addCategory, getCategoriesPaged } from "~/api/categories.server";
import type { Category, CategoryAddable, CategoryDialogData } from "~/shared/models/category.model";
import AddEditCategoryDialog from "~/components/category/AddEditNewCategory";
import { useCallback, useState } from "react";
import { validateCategoryToAdd } from "~/api/utils/validations.server";
import { handleError } from "~/api/utils/utils.server";


export const headers: HeadersFunction = ({
  loaderHeaders,
}) => ({
  "Cache-Control": 'public, no-cache, max-age=0',
});

function Categories() {
  const navigate = useNavigate();
  const submit = useSubmit();
  const [searchParams] = useSearchParams();
  const { isMobile } = useScreenSize();
  const { accountId } = useParams();
  const { pathname } = useLocation();
  const [categoryData, setCategoryData] = useState<CategoryDialogData>({
    shown: false,
    editMode: false,
    initData: undefined
  });
  const extraSearchParams = searchParams.size > 0 ? `?${searchParams.toString()}` : '';

  const handleAddNewCategory = () => {
    setCategoryData((curr) => {
      return {
        ...curr,
        shown: true,
        editMode: false,
      };
    });
  };

  const handleOnAddNewClose = useCallback((currentEnteredData?: CategoryAddable) => {
    console.log(currentEnteredData)
    if (currentEnteredData) {
      setCategoryData((curr) => {
        return {
          ...curr,
          shown: false,
          initData: {
            ...currentEnteredData
          }
        };
      });
    } else {
      setCategoryData((current) => {
        return {
          shown: false,
          editMode: false,
          initData: undefined
        };
      });
    }
  }, []);

  const handleDeleteCategory = () => {
    const proceed = confirm(`Are you sure you want to delete this item?`);
    if (!proceed) return;

  };

  const handleActionClick = useCallback((actionId: string) => {
    switch (actionId) {
      case 'addCategory': {
        handleAddNewCategory();
        break;
      }
      case 'editCategory': {
        break;
      }
      case 'deleteCategory': {
        break;
      }
    }
  }, []);

  return (
    <Stack direction="column" width="100%">
      <StickyToolbar>
        <AccountNavBar accountId={ accountId } onClickAction={ handleActionClick } />
      </StickyToolbar>

      <Box mt={ 2 } mx={ isMobile ? 2 : 0 }>
        <LayoutWithGutter size={ 'wide' }>

          <Outlet />

        </LayoutWithGutter>
      </Box>

      {
        categoryData.shown &&
        (
          <AddEditCategoryDialog initData={ categoryData.initData } isEditMode={ categoryData.editMode } open={ categoryData.shown } onClose={ handleOnAddNewClose } />
        )
      }
    </Stack>
  );
}

export default Categories;

export async function loader({ request, params, context }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const pageParam = url.searchParams.get('page') as string | null;
  const filterParam: string | null = url.searchParams.get('q');
  const page: number = pageParam ? (parseInt(pageParam) ? (parseInt(pageParam) < 0 ? 0 : parseInt(pageParam)) : 0) : 0;

  const response: HttpResponsePaged<Category[]> = await getCategoriesPaged(page, filterParam);
  const categories = response.data.map((category: Category) => {
    return {
      ...category,
      dateAddedFromNow: convertDateDisplay(category.dateAdded, 'fromNow'),
      updatedAtFromNow: convertDateDisplay(category.updatedAt, 'fromNow')
    };
  });

  return json({
    ...response,
    data: categories,
    filterParam
  });
}


export async function action({ request, context, params }: ActionFunctionArgs) {
  const body = await request.formData();

  const category: CategoryAddable = {
    name: body.get("name") as string
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

export const shouldRevalidate: ShouldRevalidateFunction = (payload) => {
  return payload.defaultShouldRevalidate;
};