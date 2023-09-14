import React, { useEffect, useState } from 'react';
import { Container, List, ListItem, ListItemText, Typography, Card, Button } from '@mui/material';
import { Link } from "react-router-dom";

//All The Inventory For Visitors and Administrators to see
function AllInventory() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8081/items`)
            .then((response) => response.json())
            .then((data) => setItems(data))
            .catch((error) => console.error(error));
    }, []);

    return (

        <Container maxWidth="lg" style={{ marginTop: '40px', backgroundColor: "lightblue" }}>
            <Typography textAlign="center" variant="h4">All Posted Inventory </Typography>
            <List>
                {items.map((item) => (
                    <Link to={`/SelectedItem/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
                        <ListItem key={item.id}>
                            <Button>
                                <Card elevation={10} style={{ width: '1000px', margin: '0 auto' }}>
                                    <ListItemText
                                        primary={`Title: ${item.ItemName}`}
                                        secondary={`Description: ${item.Description.substring(0, 100)}... - Quantity: ${item.Quantity} - Submitted By: ${item.UserId}`}
                                    />
                                </Card>
                            </Button>
                        </ListItem>
                    </Link>
                ))}
            </List>

        </Container>

    );
}

export default AllInventory;
