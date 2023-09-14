import React, { useState } from "react";
import MyInventory from "./MyInventory";
import { Container, Grid } from "@mui/material";
import AddNewItem from "./AddNewItem";

//Dashboard for Inventory Mangers
function Dashboard() {
    const [refresh, setRefresh] = useState(false);
    const handleNewItem = () => {
        setRefresh(!refresh);
    };
    return (
        <Container maxWidth="lg" style={{ marginTop: "40px" }}>
            <Grid container spacing={3}>
                <AddNewItem onNewItem={handleNewItem} />
                <MyInventory refresh={refresh} />
            </Grid>
        </Container>
    );
}

export default Dashboard;
