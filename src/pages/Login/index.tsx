import { Input } from "../../components/Input";
import { LoginContainer, LoginContent } from "./styled";
import { FaAt } from "react-icons/fa6";
import { GiPadlock } from "react-icons/gi";
import { IoEyeSharp } from "react-icons/io5";

export function Login() {
  return (
    <>
      <LoginContainer>
        <LoginContent>
          <h1>Login</h1>
          <Input leftIcon={<FaAt />} placeholder="Enter your Email" />
          <Input
            leftIcon={<GiPadlock />}
            rightIcon={<IoEyeSharp />}
            placeholder="Enter your Password"
          />
        </LoginContent>
      </LoginContainer>
    </>
  );
}
