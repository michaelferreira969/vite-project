import classnames from 'classnames';
import { LoginContainer } from "./LoginContainer.styles"
import { LogoContainer } from "./LogoContainer"
import { CamposContainer } from "./CamposContainer"

export function Login() {
    return (
        <LoginContainer>
            <LogoContainer/>

            <h1>Acesse a plataforma</h1>
            <h2>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</h2>
          
            <CamposContainer/>
        </LoginContainer>
    )
}
