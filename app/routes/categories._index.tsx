import { type MetaFunction } from "@remix-run/node";
import { useRouteLoaderData } from "@remix-run/react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { HeadersFunction } from "@remix-run/node";
import TitleBarLayout from "~/components/title/TitleBarLayout";
import CategoryIcon from '@mui/icons-material/Category';
import { TitleNameDisplay } from "~/shared/components/Title";
import type { HttpResponsePaged } from "~/shared/models/http.model";
import type { Category } from "~/shared/models/category.model";
import CategoryList from "~/components/category/CategoryList";

export const meta: MetaFunction = (data) => {
  return [
    { title: "Categories - Ledger" },
    { name: "description", content: "Summary of all categories." },
  ];
};

export const headers: HeadersFunction = ({
  loaderHeaders,
}) => ({
  "Cache-Control": loaderHeaders.get("Cache-Control") ?? 'public, no-cache, max-age=0',
});


function Categories() {
  const { totalCount } = useRouteLoaderData("routes/categories") as HttpResponsePaged<Category[]>;

  return (
    <Stack direction="column" justifyContent="start" alignItems="start" width="100%" spacing={ 3 }>
      <TitleBarLayout>
        <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 2 }>
          <CategoryIcon />
          <TitleNameDisplay name={ 'Categories' } />
        </Stack>

        <Typography variant="h5" fontFamily="Poppins">
          Total: { totalCount }
        </Typography>
      </TitleBarLayout>

      <CategoryList />

    </Stack>
  );
}

export default Categories;
