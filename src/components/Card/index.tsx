import { FiThumbsUp } from 'react-icons/fi'
import {
  CardContainer,
  BackgroundImage,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from "./styles";

const Card = () => {
  return (
    <CardContainer>
      <BackgroundImage src="https://sujeitoprogramador.com/wp-content/uploads/2019/04/react.png"/>
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/79670317?s=400&u=99591e705b3dbce6bd920c1b48d3c289c9dd67ae&v=4"/>
          <div>
            <h4>Usuário Fulano</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para o curso de React</h4>
          <p>
            Projeto feito com React no Bootcamp Orange Tech +.{" "}
            <strong>Saiba mais.</strong>
          </p>
        </PostInfo>
        <HasInfo>
            <h4>#REACT #TYPESCRIPT</h4>
            <p>
                <FiThumbsUp /> 10
            </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };