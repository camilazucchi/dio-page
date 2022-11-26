import logo from '../../assets/logo-dio.png';
import { Button } from "../Button";
import {
  Container,
  Row,
  Wrapper,
  SearchInputContainer,
  Menu,
  RightMenu,
  Input,
  UserPicture,
} from "./styles";
import { IHeader } from "./types";

const Header = ({authenticated}: IHeader) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo DIO" />
                {authenticated ? (
                  <>
                  <SearchInputContainer>
                    <Input placeholder="Buscar..." />
                </SearchInputContainer>
                <Menu>Live code</Menu>
                <Menu>Global</Menu>
                </>
                ) : null}
            </Row>
            <Row>
              {authenticated ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/79670317?s=400&u=99591e705b3dbce6bd920c1b48d3c289c9dd67ae&v=4" />
              ) : (
                <>
                <RightMenu href="/">Home</RightMenu>
                <a href='/login'><Button title="Entrar" /></a>
                <a href='/create'><Button title="Cadastrar" /></a>
                </>
              )}
            </Row>
        </Container>
    </Wrapper>
  )
};

export { Header };
