import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import {
  Container,
  Wrapper,
  Column,
  Row,
  Title,
  TitleLogin,
  SubtitleLogin,
  ForgotPasswordText,
  CreateAccountText,
} from "./styles";
import { api } from "../../services/api";
import { IFormData } from "./types";
import { IconContext } from "react-icons";
import { Main } from "../../styles/global";

const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Sua senha deve ter no mínimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (formData: IFormData) => {
    try{
      const { data } = await api.get(
        `users?email=${formData.email}&senha=${formData.password}`
      );
      if (data.length === 1) {
        navigate('/feed');
      } else {
        alert("E-mail ou senha inválido.");
      }
    }catch{
      alert("Houve um erro, desista.");
    }
  };

  return (
    <>
    <IconContext.Provider value={{ color: 'rgba(134, 71, 173, 1)' }} >
      <Header />
      <Main>
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="E-mail"
                type="email"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                errorMessage={errors?.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
              <CreateAccountText><a href="/create">Criar conta</a></CreateAccountText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
      </Main>
      </IconContext.Provider>
      
    </>
  );
};

export { Login };