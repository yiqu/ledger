import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import type { Category } from '~/shared/models/category.model';
import Stack from "@mui/material/Stack";
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

interface CategoryDisplayProps {
  category: Category;
}

function CategoryDisplay({ category }: CategoryDisplayProps) {

  return (
    <Card elevation={ 0 }>
      {/* <CardMedia
        sx={ { height: 140 } }
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      /> */}
      <CardContent>
        <Stack direction="column" justifyContent="start" alignItems="start" width="100%" spacing={ 1 }>
          <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 1 } width="100%">
            <Typography variant="h5" component="div" minWidth="15%">
              { category.name }
            </Typography>
            <Divider orientation='vertical' flexItem />
            <IconButton size='small' color='info'>
              <Edit fontSize='small' />
            </IconButton>
            <IconButton size="small" color='error'>
              <Delete fontSize='small' />
            </IconButton>
          </Stack>

          <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 0.5 }>
          </Stack>
        </Stack>


        <Stack>

        </Stack>

      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}

export default CategoryDisplay;