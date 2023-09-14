import React, { useEffect, useState } from 'react';
import { Container, List, ListItem, ListItemText, Typography, Box, Card, Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from "react-router-dom";

//Personal inventory for managers
function MyInventory({ refresh }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getUserItem = () => {
            fetch('http://localhost:8081/cookie', { credentials: 'include' })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Cant find verification status.');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.verified && data.userId) {
                        return fetch(`http://localhost:8081/items/user/${data.userId}`);
                    } else {
                        throw new Error('User is not verified.');
                    }
                })
                .then((response) => response.json())
                .then((itemsData) => setItems(itemsData))
                .catch((error) => {
                    console.error(error);
                    alert('Cannot get items or User is not verified.');
                });
        };
        getUserItem();
    }, [refresh]);

    const DeleteItem = (itemId) => {
        fetch(`http://localhost:8081/items/${itemId}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Problem deleting the item');
                }
                setItems(prevItems => prevItems.filter(item => item.id !== itemId));
                alert('Item deleted successfully!');
            })
            .catch((error) => {
                console.error('There was a problem deleting', error);
            });
    };

    return (
        <>
            <Container maxWidth="lg" style={{ marginTop: '40px', backgroundColor: "lightblue" }}>
                <Box mb={5} style={{ marginTop: '40px' }} textAlign="center">
                    <Typography variant="h4">My Posted Inventory </Typography>
                    <List>
                        {items.map((item) => (
                            <ListItem key={item.id}>
                                <Link to={`/SelectedItem/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
                                    <Button>
                                        <Card elevation={10} style={{ width: '1000px', margin: '0 auto' }}>
                                            <ListItemText
                                                style={{ marginLeft: '10px' }}
                                                primary={`Title: ${item.ItemName}`}
                                                secondary={`Description: ${item.Description.substring(0, 100)}...  Quantity: ${item.Quantity}`}
                                            />
                                        </Card>
                                    </Button>
                                </Link>
                                <Button>
                                    <DeleteForeverIcon
                                        variant="contained"
                                        style={{ color: 'red' }}
                                        onClick={() => DeleteItem(item.id)}
                                    >
                                    </DeleteForeverIcon>
                                </Button>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Container>
        </>
    );
}

export default MyInventory;
