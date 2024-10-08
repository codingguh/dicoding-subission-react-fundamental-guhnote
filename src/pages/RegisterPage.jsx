import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from "@mantine/core";
  import { useNavigate, Link } from "react-router-dom";
  import classes from "./AuthenticationTitle.module.css";
  import AuthContext from "../context/AuthContext";
  import useInput from "../hooks/useInput";
  import { register } from "../utils/network-data";
  import { useContext } from "react";
import useLanguage from "../hooks/useLanguage";
  
  function LoginPage() {
    const { setAuth } = useContext(AuthContext);
    const [name, onNameChange] = useInput("");
    const [email, onEmailChange] = useInput("");
    const [password, onPasswordChange] = useInput("");
    const [confirmPassword, onConfirmPasswordChange] = useInput("");
    const navigate = useNavigate();
    const text = useLanguage('register')
  
    const handleSubmit = (e) => {
        e.preventDefault()
        /**
         * Validasi Konfirmasi Password
         */
        if (password !== confirmPassword) {
          alert('Konfirmasi password tidak sesuai')
        }
        /**
         * Register
         */
        register({ name, email, password })
          .then((res) => {
            if (!res.error) {
            //   alert(textRegister.msg.registerSuccess)
              navigate('/login')
            }
          })
          .catch(() => {
            // alert(textApp.msg.error)
          })
      }
    return (
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          {text.header}
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
        {text.footer}{" "}{" "}
          <Anchor size="sm" component="button" className="text-primary">
            <Link to="/login">
              {" "}
              <span style={{ fontWeight: "bold", color: "rgb(51, 154, 240)" }}>
                {text.footerLoginLink}
              </span>
            </Link>
          </Anchor>
        </Text>
  
        <form>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput
              value={name}
              onChange={onNameChange}
              label="Username"
              placeholder="your username"
              required
              style={{marginBottom:'9px'}}
            />
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
            <PasswordInput
              label="Confrirm Password"
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
              placeholder="Confirm Password"
              required
              mt="md"
            />
           
            <Button
              onClick={handleSubmit}
              fullWidth
              mt="xl"
              color="rgb(51, 154, 240)"
            >
             Register
            </Button>
          </Paper>
        </form>
      </Container>
    );
  }
  
  export default LoginPage;
  