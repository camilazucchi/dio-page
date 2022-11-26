import { useForm } from "react-hook-form";
import { IconContext } from "react-icons";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextContent } from "../Home/styles";
import {
  Column,
  Container,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "../Login/styles";
import { IFormData } from "../Login/types";

const CreateAccount = () => {

    const {
        control,
        formState: { errors },
      } = useForm<IFormData>({
      });

      
  return (
    <>
     <IconContext.Provider value={{ color: 'rgba(134, 71, 173, 1)' }} >
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form>
            <Input
                name="name"
                errorMessage={errors?.name?.message}
                control={control}
                placeholder="Nome completo"
                type="name"
                leftIcon={<MdPerson />}
              />
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
            </form>
            <Button title="Criar minha conta" variant="secondary" type="submit" />
            <TextContent>
            Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
            </TextContent>
            <TextContent>
                Já tenho conta. Fazer login
            </TextContent>
            
          </Wrapper>
        </Column>
      </Container>
      </IconContext.Provider>
    </>
  );
};

export { CreateAccount };
