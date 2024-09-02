import * as Yup from "yup";
export const validationSchema = Yup.object({
  name: Yup.string().required("Nome é obrigatório"),
  email: Yup.string().email("Email inválido").required("Email é obrigatório"),
  password: Yup.string()
    .required("Senha é obrigatória")
    .matches(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
    .matches(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
    .matches(/\d/, "A senha deve conter pelo menos um número")
    .min(8, "A senha deve ter no mínimo 8 caracteres"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "As senhas devem corresponder")
    .required("Confirmação de senha é obrigatória"),
});
