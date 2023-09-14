import React, { useState, useEffect } from 'react';
import { Grid, Card, CardActions, TextField, Button, Container } from '@mui/material';

//Add new items 
const SubmitItem = ({ onNewItem }) => {
    const [description, setDescription] = useState('');
    const [itemName, setItemName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8081/cookie', { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                if (data.verified) {
                    setUserId(data.userId);
                }
            })
            .catch(error => {
                console.error('Failed', error);
            });
    }, []);

    const handlePostItem = () => {
        if (!userId) {
            alert('Log In Before Posting');
            return;
        }

        const data = {
            UserId: userId,
            ItemName: itemName,
            Description: description,
            Quantity: quantity,
        };
        fetch('http://localhost:8081/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                alert('Item added successfully!');
                onNewItem()
            })
            .catch((error) => {
                console.error('There was a problem POSTing', error);
            });
    };

    return (
        <Container maxWidth="lg" style={{ marginTop: '40px' }} >
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardActions>
                            <TextField
                                fullWidth
                                id="ItemName"
                                label="Name Of Item"
                                variant="outlined"
                                value={itemName}
                                onChange={(e) => setItemName(e.target.value)}
                            />
                            <TextField
                                fullWidth
                                id="Description"
                                label="Description"
                                variant="outlined"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <TextField
                                fullWidth
                                id="Quantity"
                                label="Quantity"
                                variant="outlined"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                            <Button style={{ marginLeft: '20px' }}
                                fullWidth
                                onClick={handlePostItem}
                                variant="contained"
                                color="primary"
                            >
                                Add New Item
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SubmitItem;