import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";

//Individual Item Selected Page
const SelectedItem = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:8081/items/${id}`)
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch((error) =>
                console.error("Error fetching selected inventory:", error)
            );
    }, [id]);

    return (
        <Card sx={{ m: 3, width: "60%", margin: "auto", marginTop: "50px" }}>
            {items.map((item) => (
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Title: {item.ItemName}
                    </Typography>
                    <Typography variant="body1">
                        Description: {item.Description}
                    </Typography>
                    <Typography variant="body1">Quantity: {item.Quantity}</Typography>
                </CardContent>
            ))}
        </Card>
    );
};
export default SelectedItem;
