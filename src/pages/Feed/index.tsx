import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { UserInfo } from "../../components/UserInfo";
import { Container, Title, TitleHighlight, Column } from "./styles";

const Feed = () => {
  return (
    <>
      <Header authenticated={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={35}
            name="Fulano de Tal"
            image="https://avatars.githubusercontent.com/u/79670317?s=400&u=99591e705b3dbce6bd920c1b48d3c289c9dd67ae&v=4"
          />
          <UserInfo
            percentual={35}
            name="Fulano de Tal"
            image="https://avatars.githubusercontent.com/u/79670317?s=400&u=99591e705b3dbce6bd920c1b48d3c289c9dd67ae&v=4"
          />
          <UserInfo
            percentual={35}
            name="Fulano de Tal"
            image="https://avatars.githubusercontent.com/u/79670317?s=400&u=99591e705b3dbce6bd920c1b48d3c289c9dd67ae&v=4"
          />
          <UserInfo
            percentual={35}
            name="Fulano de Tal"
            image="https://avatars.githubusercontent.com/u/79670317?s=400&u=99591e705b3dbce6bd920c1b48d3c289c9dd67ae&v=4"
          />
          <UserInfo
            percentual={35}
            name="Fulano de Tal"
            image="https://avatars.githubusercontent.com/u/79670317?s=400&u=99591e705b3dbce6bd920c1b48d3c289c9dd67ae&v=4"
          />
          <UserInfo
          percentual={35}
          name="Fulano de Tal"
          image="https://avatars.githubusercontent.com/u/79670317?s=400&u=99591e705b3dbce6bd920c1b48d3c289c9dd67ae&v=4"
        />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
