import Search from "@mui/icons-material/Search";
import Close from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import type { ChangeEvent, SyntheticEvent } from "react";
import { useEffect, useState } from "react";
import { Form, useSearchParams } from "@remix-run/react";


interface SearchInputProps {
  queryValue: string;
}

function SearchInput({ queryValue }: SearchInputProps) {
  const [, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState<string>(queryValue || '');

  useEffect(() => {
    setSearchInput(queryValue || '');
  }, [queryValue]);

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSearchInputClear = () => {
    setSearchInput('');
    setSearchParams((params: URLSearchParams) => {
      params.delete('q');
      return params;
    });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setSearchParams({ q: searchInput });
  };

  return (
    <Box flexBasis="50%">
      <Stack direction="row" justifyContent="start" alignItems="center" width="100%">
        <Form onSubmit={ handleSubmit } style={ { width: '100%' } } role="search" >
          <FormControl variant="standard" fullWidth>
            <Input
              id="search"
              startAdornment={
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              }
              endAdornment={
                searchInput ? <InputAdornment position="end">
                  <IconButton onClick={ handleSearchInputClear }>
                    <Close />
                  </IconButton>
                </InputAdornment> : null
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