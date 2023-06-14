import { useDispatch, useStore } from "../context/ContextProvider";
import { types } from "../context/storeReducer";

function FormClient() {
  const { grades, auth } = useStore();
  const dispatch = useDispatch();
  console.log(grades);
  const deleteGrades = () => {
    dispatch({ type: types.gradesDeleteAll });
  };
  const login = () => {
    dispatch({ type: types.login });
  };

  const logout = () => {
    dispatch({ type: types.logout });
  };

  return (
    <>
      {!auth && <button onClick={login}>Login</button>}
      {auth && (
        <>
          <button onClick={logout}>Logout</button>
          <div>
            {grades.map((grade) => {
              return <p> {`${grade.id} ${grade.grade}`}</p>;
            })}
          </div>
          <button onClick={deleteGrades}>Eliminar Notas</button>
        </>
      )}
    </>
  );
}

export default FormClient;
