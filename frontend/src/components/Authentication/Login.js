import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)

    const toast = useToast()
    const navigate = useNavigate()
    const handleClick = () => setShow(!show)

    const submitHandler = async () => {
        setLoading(true);
        if (!email || !password) {
            toast({
                title: "Please Fill all the Fields",
                status: "warning",
                duration: 4000,
                isClosable: true,
                position: 'bottom'
            });
            setLoading(false);
            return;
        }

        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            };

            const { data } = await axios.post("/api/user/login", { email, password }, config);

            toast({
                title: "Login Successful",
                status: "success",
                duration: 4000,
                isClosable: true,
                position: 'bottom'
            });

            localStorage.setItem("userInfo", JSON.stringify(data));
            setLoading(false);
            navigate("/chats");

        } catch (error) {
            toast({
                title: "Error Occured!",
                status: "error",
                duration: 4000,
                isClosable: true,
                position: 'bottom'
            });
            setLoading(false);
        }
    };

    return (
        <VStack>
            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    value={email}
                    placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        value={email}
                        type={show ? "text" : "password"}
                        placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} />
                    <InputRightElement>
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <Button
                colorScheme='blue'
                width="100%"
                style={{ marginTop: 15 }}
                onClick={submitHandler}
                isLoading={loading}
            >
                Login
            </Button>
            <Button
                variant="solid"
                colorScheme='red'
                width="100%"
                style={{ marginTop: 15 }}
                onClick={() => {
                    setEmail("guest@gmail.com")
                    setPassword("123456")
                }}
            >
                Get Guest User Credentials
            </Button>
        </VStack>
    )
}

export default Login