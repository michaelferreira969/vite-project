import { 
    Label,
    TextLogo
} from "./CamposContainer.styles"

export function CamposContainer() {
    return (
        <CamposContainer>

                <label htmlFor="">E-mail </label>
                <input type="text" name="email" placeholder="Digite seu e-mail" value={loginData.login} onChange={handleInputChange}/>
            
                <label htmlFor=""><span>Senha</span> <a href="#" className="rec-senha">Esqueceu a senha?</a></label>
                <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Digite sua senha"
                  value={loginData.password}
                  onChange={handleInputChange}
                />

                <button className={classnames('password-button', { active: showPassword })} onClick={handleTogglePassword}>
                  {showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                </button>

                <button type="button" className="button-entrar">
                    Entrar
                </button>

                <div className="text-footer">
                    Ainda não tem uma conta? <a href="#" className="cadastro">Inscreva-se</a>
                </div>

        </CamposContainer>
    )
}