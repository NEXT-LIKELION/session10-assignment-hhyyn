import { Grid, Box } from "@mui/material"
import Overview from "./overview"
import UsersByCountry from "./users-by-country"
import ProductTree from "./product-tree"
import PageData from "./page-data"

export default function Dashboard() {
  return (
    <Box sx={{ mt: 8 }}>
      <Overview />
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} lg={9}>
          <PageData />
        </Grid>
        <Grid item xs={12} lg={3}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <ProductTree />
            </Grid>
            <Grid item>
              <UsersByCountry />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
