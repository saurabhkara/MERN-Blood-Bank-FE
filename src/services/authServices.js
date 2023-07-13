import { registerUser, userLogin } from "../redux/features/auth/authActions";
import store from "../redux/store";
export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    console.log("Login ", email, password, role);
    if (!email || !password) {
      alert("Every field is mandatory");
    }
    store.dispatch(userLogin({ email, password, role }));
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  email,
  password,
  role,
  name,
  organizationName,
  hospitalName,
  website,
  address,
  phone
) => {
  e.preventDefault();
  try {
    store.dispatch(
      registerUser({
        email,
        password,
        role,
        name,
        organizationName,
        hospitalName,
        website,
        address,
        phone,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
