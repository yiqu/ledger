import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ReverseListItem from "~/shared/components/ReverseListItem";
import ContentPaperWrap from "~/shared/layouts/ContentPaperWrap";
import type { CategoryNullable } from "~/shared/models/category.model";

interface CategorySideBarProps {
  category: CategoryNullable;
  totalAccounts: number;
  expensesAllTimeSum: number | null;
  currentMonthExpensesSum: number | null;
}

function CategorySideBar({ category, totalAccounts, expensesAllTimeSum, currentMonthExpensesSum }: CategorySideBarProps) {
  return (
    <ContentPaperWrap>
      <Stack direction="column" justifyContent="start" alignItems="start">
        <List sx={ { width: '100%' } }>
          <ReverseListItem primaryText={ "Category Name" } secondaryText={ `${category.name}` } />
          <ReverseListItem primaryText={ "Accounts" } secondaryText={ `${totalAccounts}` } />
          <ReverseListItem primaryText={ "Created" } secondaryText={ `${category.dateAddedFromNow?.display ?? 'N/A'}` } />
          <ReverseListItem primaryText={ "Last Edited" } secondaryText={ `${category.updatedAtFromNow?.display ?? 'N/A'}` } />
          <ReverseListItem primaryText={ "Shown On Dashboard" } secondaryText={ category.shown ? 'Yes' : 'No' } />
          <ReverseListItem primaryText={ "Current Month Balance" } secondaryText={ `$${currentMonthExpensesSum?.toLocaleString() ?? 'N/A'}` } />
          <ReverseListItem primaryText={ "Lifetime Balance" } secondaryText={ `$${expensesAllTimeSum?.toLocaleString() ?? 'N/A'}` } />
          <ReverseListItem primaryText={ "ID" } secondaryText={ `${category.id}` } />
        </List>
      </Stack>
    </ContentPaperWrap>
  );
}

export default CategorySideBar;