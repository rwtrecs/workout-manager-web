import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

export function Login() {
  return (
    <Container>
      <Content>
        <h1>Workout Manager</h1>
        <h2>(Web)</h2>

        <img src={logoImg} alt="Workout Manager (Web)" />

        <form action="" method="post">
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="senha" placeholder="Password" />
          <button type="submit">login</button>
        </form>

        <a href="register/">register</a>
      </Content>
    </Container>
  )
}