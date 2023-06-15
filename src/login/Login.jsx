import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const Data = {
        "email": email,
        "password": password
    };
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://reqres.in/api/login', {
            method: 'POST',
            body: JSON.stringify(Data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {


                if (data.token) {
                    navigate('/register')
                }
                else {
                    console.log(data.error, 'err')
                }

            }

            )
            // .catch((err) => {
            //     console.log(err.message, '->err');
            // });

    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
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

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </>

    )
}
export default Login;