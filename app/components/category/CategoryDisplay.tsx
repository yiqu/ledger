import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import type { Category, CategoryDialogData, CategoryEditable } from '~/shared/models/category.model';
import Stack from "@mui/material/Stack";
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';
import Add from '@mui/icons-material/Add';
import { useFetcher } from '@remix-run/react';
import { useFetcherType } from '~/shared/hooks/useFetcherType';
import { useState } from 'react';
import AddEditCategoryDialog from './AddEditNewCategory';
import Chip from "@mui/material/Chip";
import { green, grey } from '@mui/material/colors';
import { ellipsisBlock } from '~/shared/utils/css.utils';


interface CategoryDisplayProps {
  category: Category;
}

function CategoryDisplay({ category }: CategoryDisplayProps) {
  const editFetcher = useFetcher<CategoryEditable>();
  const deleteFetcher = useFetcher<CategoryEditable>();
  const { isFetcherActionReload, isFetcherActionSubmission } = useFetcherType(deleteFetcher);
  const { isFetcherActionReload: editActionReload, isFetcherActionSubmission: editSubmission } = useFetcherType(editFetcher);

  const [categoryData, setCategoryData] = useState<CategoryDialogData>({
    shown: false,
    editMode: false,
    initData: undefined
  });

  const isApiLoading = isFetcherActionReload || isFetcherActionSubmission;

  const handleAction = (actionId: 'addAccount' | 'edit' | 'delete') => () => {
    switch (actionId) {
      case 'addAccount': {
        break;
      }
      case 'edit': {
        setCategoryData({
          shown: true,
          editMode: true,
          initData: {
            ...category
          }
        });
        break;
      }
      case 'delete': {
        const proceed = confirm(`Are you sure you want to delete this category?`);
        if (!proceed) return;

        deleteFetcher.submit({ id: category.id }, { method: 'DELETE', action: '/categories/delete', preventScrollReset: true });
        break;
      }
      default:
        break;
    }
  };

  const handleOnAddNewClose = () => {
    setCategoryData((curr) => {
      return {
        ...curr,
        shown: false,
      };
    });
  };

  return (
    <>
      <Card elevation={ 0 }>
        {/* <CardMedia
        sx={ { height: 140 } }
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      /> */}
        <CardContent>
          <Stack direction="column" justifyContent="start" alignItems="start" width="100%" spacing={ 1 }>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={ 1 } width="100%">
              <Typography variant="h6" component="div" style={ { ...ellipsisBlock } } title={ category.name }>
                { category.name }
              </Typography>
            </Stack>

            <Stack direction="row" justifyContent="start" alignItems="start" spacing={ 0.5 } width="100%">
              <Chip
                label={ category.shown ? 'Shown' : 'Hidden' }
                size='small'
                sx={ {
                  border: '1px solid',
                  backgroundColor: category.shown ? green[200] : grey[300],
                  borderColor: category.shown ? green[400] : grey[500],
                } }
              />
              <Chip
                label={ `${category.accounts.length} accounts` }
                size='small'
                sx={ {
                  border: '1px solid',
                  backgroundColor: grey[300],
                  borderColor: grey[500],
                  color: 'primary.main'
                } }
              />
            </Stack>
          </Stack>

        </CardContent>
        <CardActions>
          <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
            <Button size="small" color='success' startIcon={ <Add fontSize='small' /> } disabled={ isApiLoading }
              onClick={ handleAction('addAccount') }>
              Add account
            </Button>
            <Stack direction="row" justifyContent="end" alignItems="center">
              <Button size="small" color='info' startIcon={ <Edit fontSize='small' /> } disabled={ isApiLoading } onClick={ handleAction('edit') }>
                Edit
              </Button>
              <Button size="small" color='error' startIcon={ <Delete fontSize='small' /> } disabled={ isApiLoading } onClick={ handleAction('delete') }>
                Delete
              </Button>
            </Stack>
          </Stack>
        </CardActions>
      </Card>

      {
        categoryData.shown && (
          <AddEditCategoryDialog initData={ categoryData.initData } isEditMode={ categoryData.editMode } open={ categoryData.shown } onClose={ handleOnAddNewClose } />
        )
      }
    </>
  );
}

export default CategoryDisplay;