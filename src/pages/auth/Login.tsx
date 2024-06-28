import { ErrorBoundary } from "../../components/errorBoundary/ErrorBoundary"
import { FormLogin } from "../../components/formLogin/FormLogin"

export const Login  =() => {
  return (
    <div className="h-screen">
      <ErrorBoundary>
        <FormLogin/>
      </ErrorBoundary>
    </div>
  )
}

export default Login
