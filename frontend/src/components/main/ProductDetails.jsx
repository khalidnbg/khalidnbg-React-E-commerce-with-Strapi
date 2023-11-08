import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";

const ProductDetails = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}>
      <Box sx={{ display: "flex" }}>
        <img width={360} src="src\images\2\2.jpg" alt="" />
      </Box>

      <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">productTitle</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          $productPrice
        </Typography>
        <Typography variant="body1">productDescription</Typography>

        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}>
          {["src/images/2/3.jpg", "src/images/2/final.jpg"].map((item) => {
            return (
              <img
                style={{ borderRadius: 3 }}
                width={90}
                height={100}
                key={item}
                src={item}
                alt=""
              />
            );
          })}
        </Stack>

        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained">
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
