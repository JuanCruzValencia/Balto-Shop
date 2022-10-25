import { createContext } from "react";
import { useLocalStorage } from "../localStorage/useLocalStorage";
import { getUser, setUser } from "../firebase/firebase";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [userState, setUserState] = useLocalStorage("userLogged", null);
  // Funcion para registrar a nuevo usuario
  // Recibe un nombre, mail y contrasena
  // Lo guarda en firestore
  const registerUser = async (data) => {
    const auth = getAuth();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = res.user;
      setUser({
        ...data,
        uid: user.uid,
      });
      setUserState(data);
      //enviar a la pagina principal
    } catch (error) {
      alert(error.message);
    }
  };

  // Funcion para ingresar con un usuario ya registrado
  // Toma el ingreso de los imputs
  // Los compara con los datos y devuelve a pagina de inicio con el usuario logueado
  const signIn = async ({ email, password }) => {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const resolve = await getUser(email);
      setUserState(resolve.docs[0].data());
    } catch (error) {
      alert(error.message);
    }
  };

  const logOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      setUserState(null);
    });
  };

  const data = {
    userState,
    registerUser,
    signIn,
    logOut,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};
