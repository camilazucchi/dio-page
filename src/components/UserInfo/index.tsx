import { Container, UserPicture, TextName, Progress } from "./styles";
import { IUserInfo } from "./types";

const UserInfo = ({name, image, percentual}: IUserInfo) => {
  return <Container>
    <UserPicture src={image}/>
    <div>
        <TextName>{name}</TextName>
        <Progress percentual={percentual}/>
    </div>
  </Container>;
};

export { UserInfo };
