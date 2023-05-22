import { useContext } from "react";
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const { loginUser,
        loginError,
        loginInfo,
        updateLoginInfo,
        isLoginLoading } = useContext(AuthContext);
}