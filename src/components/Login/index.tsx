import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

export function Login() {
  return (
    <Container>
      <Content>
        <h1>Workout Manager</h1>
        <h2>(Web)</h2>

        <img src={logoImg} alt="Workout Manager (Web)" />

        <input type="email" name="Email" />
        <input type="password" name="Senha" />
        <button type="submit">login</button>

        <button>register</button>
      </Content>
    </Container>
  )
}