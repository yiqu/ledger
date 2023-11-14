import Search from "@mui/icons-material/Search";
import Close from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import type { SyntheticEvent } from "react";
import { useEffect, useState } from "react";
import { Form, useNavigate, useSearchParams } from "@remix-run/react";

function SearchInput() {
  const [searchParams, setSearchParams] = useSearchParams();
  const nav = useNavigate();
  const searchParam: string | null = searchParams.get('q');
  const [searchInput, setSearchInput] = useState<string>(searchParam ?? '');

  useEffect(() => {
    if ((searchParam ?? '') === '') {
      setSearchInput('');
    }
  }, [searchParam]);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSearchInputClear = () => {
    nav('/expenses');
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setSearchParams({ q: searchInput });
  };

  return (
    <Box flexBasis="50%">
      <Stack direction="row" justifyContent="start" alignItems="center" width="100%">
        <Form onSubmit={ handleSubmit } style={ { width: '100%' } } >
          <FormControl variant="standard" fullWidth>
            <Input
              id="search"
              startAdornment={
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={ handleSearchInputClear }>
                    <Close />
                  </IconButton>
                </InputAdornment>
              }
              value={ searchInput }
              onChange={ handleSearchInputChange }
              type="text"
            />
          </FormControl>
        </Form>
      </Stack>
    </Box>
  );
}

export default SearchInput;