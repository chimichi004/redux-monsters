import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMonsters } from '../../api/firestore';


const MonsterList = () => {
  const {monsters }= useSelector((state) => state.monster);
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(getMonsters());
  }, [dispatch]);

  useEffect(() => {
    initFetch()
  }, [initFetch]);

  return (
    <div className="container">
      <div className="row">
        <h1>Redux CRUD Monster app</h1>
      </div>
      <div className="row">
        <div className="two columns">
          <button className="button-primary">Load monsters</button>
        </div>
        <div className="two columns">
          <button className="button-primary">Add monster</button>
        </div>
      </div>
      <div className="row">
        <table className="u-full-width">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
          {monsters.map(({ id, name, type }, i) => (
              <tr key={i}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{type}</td>
                <td>
                  <button>Delete</button>
                  <button>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MonsterList;
