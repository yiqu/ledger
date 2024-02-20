import { json } from "@remix-run/node";
import useScreenSize from "~/shared/hooks/useIsMobile";
import LayoutWithGutter from "~/shared/layouts/LayoutWithGutter";
import type { ShouldRevalidateFunction } from "@remix-run/react";
import { Outlet, useParams } from "@remix-run/react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import type { LoaderFunctionArgs } from "@remix-run/node";
import AccountNavBar from "~/components/navbar/AccountNavBar";
import StickyToolbar from "~/shared/toolbar/StickyToolbar";
import type { HttpResponsePaged } from "~/shared/models/http.model";
import { convertDateDisplay } from "~/api/utils/date.server";
import { getCategoriesAll, getCategoriesPaged } from "~/api/categories.server";
import type { Category, CategoryAddable, CategoryDialogData } from "~/shared/models/category.model";
import AddEditCategoryDialog from "~/components/category/AddEditNewCategory";
import { useCallback, useState } from "react";


function Categories() {
  const { isMobile } = useScreenSize();
  const { accountId } = useParams();
  const [categoryData, setCategoryData] = useState<CategoryDialogData>({
    shown: false,
    editMode: false,
    initData: undefined
  });

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

  const handleActionClick = useCallback((actionId: string) => {
    switch (actionId) {
      case 'addCategory': {
        handleAddNewCategory();
        break;
      }
    }
  }, []);

  return (
    <Stack direction="column" width="100%">
      <StickyToolbar>
        <AccountNavBar accountId={ accountId } onClickAction={ handleActionClick } />
      </StickyToolbar>

      <Box mt={ 2 } mx={ isMobile ? 1 : 0 }>
        <LayoutWithGutter size={ isMobile ? 'full' : 'wider' }>

          <Outlet />

        </LayoutWithGutter>
      </Box>

      {
        categoryData.shown && (
          <AddEditCategoryDialog initData={ categoryData.initData } isEditMode={ categoryData.editMode } open={ categoryData.shown } onClose={ handleOnAddNewClose } />
        )
      }
    </Stack>
  );
}

export default Categories;

export async function loader({ request, params, context }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const isGetAll: boolean = Boolean(url.searchParams.get('getAll') as string | null);
  const pageParam = url.searchParams.get('page') as string | null;
  const filterParam: string | null = url.searchParams.get('q');
  const page: number = pageParam ? (parseInt(pageParam) ? (parseInt(pageParam) < 0 ? 0 : parseInt(pageParam)) : 0) : 0;

  const response: HttpResponsePaged<Category[]> = isGetAll ? await getCategoriesAll() : await getCategoriesPaged(page, filterParam);
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

export const shouldRevalidate: ShouldRevalidateFunction = (payload) => {
  return payload.defaultShouldRevalidate;
};