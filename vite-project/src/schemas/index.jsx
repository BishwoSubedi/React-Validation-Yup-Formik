import * as Yup from "yup";
export const regSchema=Yup.object({
    name:Yup.string().min(2).max(25).required(" Name is required"),
    email:Yup.string().email().required(" Please Enter Email"),
    password:Yup.string().min(6).required("Password is required and  must be of minimum 6 length"),
   confirm_password:Yup.string().required().oneOf([Yup.ref("password"),null],"Password must be same")

}
)