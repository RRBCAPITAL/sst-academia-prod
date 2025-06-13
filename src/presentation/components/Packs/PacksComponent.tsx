import { packs } from "../../utils/DataPacks";
import { Grid } from "@mui/material";
import PackComponent from "./PackComponents";
import { PackInterface } from "../../interfaces/pack.interface";

const PacksComponent = () => {
    return (
        <Grid
            component="section"
            display="grid"
            gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)", }}
            sx={{
                width: { sm: "100vw", md: "100%" }, gap: {
                    xs: 2,
                }, pt: 0, p: 0, alignItems: "center", margin: 'auto', maxWidth: {
                    sm: '768px',
                    lg: '1440px'
                },
            }}
        >
            {packs.map((pack: PackInterface) => (
                <PackComponent key={pack.id} pack={pack} />
            ))}
        </Grid>
    )
}

export default PacksComponent;