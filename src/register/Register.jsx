import React, { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export const Register = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null);
    const [age, setAge] = useState(null);
    const [name, setName] = useState(null);
    // const Data = {
       
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://reqres.in/api/register', {
            "name": name,
            "password": password,
            "email": email,
            "age": age
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Enter Your Name"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAge">
                <Form.Label>Age</Form.Label>
                <Form.Control
                    onChange={(e) => setAge(e.target.value)}
                    type="number"
                    placeholder="Age"
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>

    )
}