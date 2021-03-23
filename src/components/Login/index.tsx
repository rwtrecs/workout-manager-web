import logoImg from '../../assets/logo.svg'

import { Box } from './styles'

export function Login() {
  return (
    <main>
      <Box>
        <h1>Workout Manager (Web)</h1>
        <img src={logoImg} alt="Workout Manager (Web)" />
        <input type="email" name="Email" id="" />
        <input type="password" name="Senha" id="" />
        <button type="submit">login</button>
        <button>register</button>
      </Box>
    </main>
  )
}