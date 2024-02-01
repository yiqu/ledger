import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import type { TypographyProps } from "@mui/material/Typography";
import Typography from "@mui/material/Typography";

function Currency({ integer, decimal, extraStyles }: { integer: number, decimal: string, extraStyles?: TypographyProps }) {
  return (
    <Stack direction="row" justifyContent="start" alignItems="center">
      <Box>
        <Typography letterSpacing="0.5px" component="div" className="integer" { ...extraStyles }>
          { integer.toLocaleString() }
        </Typography>
      </Box>
      <Box>
        <Typography className="decimal" letterSpacing="0px" component="div" { ...extraStyles }>
          { decimal }
        </Typography>
      </Box>
    </Stack>
  );
}

export default Currency;