import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from "@mantine/core";
import { useNavigate, Link } from "react-router-dom";
import classes from "./AuthenticationTitle.module.css";
import AuthContext from "../context/AuthContext";

import useInput from "../hooks/useInput";
import { getUserLogged, login, putAccessToken } from "../utils/network-data";
import { useContext } from "react";
import useLanguage from '../hooks/useLanguage'

function LoginPage() {
  const { setAuth } = useContext(AuthContext);
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const navigate = useNavigate();
  const text = useLanguage('login')

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password }).then((res) => {
      if (!res.error) {
        putAccessToken(res.data.accessToken);
        getUserLogged()
          .then((res) => {
            if (!res.error) {
              setAuth(res.data);
            } else {
              setAuth(null);
            }
            navigate("/");
          })
          .catch(() => {
            // alert(textApp.msg.error);
          });
      }
    });
  };
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        {text.header}
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
      {text.footer}{" "}
        <Anchor size="sm" component="button" className="text-primary">
          <Link to="/register">
            {" "}
            <span style={{ fontWeight: "bold", color: "rgb(51, 154, 240)" }}>
             {text.footerRegisterLink}
         
            </span>
          </Link>
        </Anchor>
      </Text>

      <form>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput
            value={email}
            onChange={onEmailChange}
            label="Email"
            placeholder="you@mantine.dev"
            required
          />
          <PasswordInput
            label="Password"
            value={password}
            onChange={onPasswordChange}
            placeholder="Your password"
            required
            mt="md"
          />
          <Button
            onClick={handleSubmit}
            fullWidth
            mt="xl"
            color="rgb(51, 154, 240)"
          >
            Sign in
          </Button>
        </Paper>
      </form>
    </Container>
  );
}

export default LoginPage;
