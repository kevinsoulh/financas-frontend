import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import { Background,
Container,
AreaInput,
Input,
SubmitButton,
SubmitText,
} from '../SignIn/styles';

import { AuthContext } from '../../contexts/auth';

function SignUp(){

  const { user } = useContext(AuthContext);

  function handleSignUp(){
    console.log(user.name)
  }

  return(
    <Background>

      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enable
      >

        <AreaInput>
          <Input
            placeholder="Nome"
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="E-mail"
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Sua senha"
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>

      </Container>

    </Background>
  )
}

export default SignUp;