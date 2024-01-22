import Box from "@mui/material/Box";

function Footer() {
  return (
    <Box
      id="footer"
      component="footer"
      sx={ {
        width: '100%',
        bgcolor: (theme) => theme.palette.grey[100],
      } }
    >
      Footer here
    </Box>
  );
}

export default Footer;