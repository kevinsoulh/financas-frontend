import React, { useContext, useState } from 'react';
import { Platform, ActivityIndicator } from 'react-native';

import { Background,
Container,
AreaInput,
Input,
SubmitButton,
SubmitText,
} from '../SignIn/styles';

import { AuthContext } from '../../contexts/auth';

function SignUp(){

  const { signUp, loadingAuth } = useContext(AuthContext);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignUp(){
    if(email === '' || password === '' || nome === '') return alert('Você precisa preencher todos os campos!');
    signUp(email, password, nome);
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
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="E-mail"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Sua senha"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color="#FFF" />
            ) : (
              <SubmitText>Cadastrar</SubmitText>
            )
          }

        </SubmitButton>

      </Container>

    </Background>
  )
}

export default SignUp;