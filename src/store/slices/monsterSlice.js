import { createSlice } from "@reduxjs/toolkit";
import {
  getMonsters,
  //   getMonsterById,
  //   createMonster,
  //   updateMonster,
  //   removeMonster,
} from "../../api/firestore";

const monsterObject = {
  name: "",
  type: "",
  level: 0,
  strength: 0,
  agility: 0,
  intelligence: 0,
  dexterity: 0,
  id: 0,
};

const initialState = {
  monsters: [],
  monster: monsterObject,
};

const monsterSlice = createSlice({
  name: "monster",
  initialState,
//   reducers: {
//     getMonsterList(state) {
//       let data = getMonsters();
//       console.log("data", data);
//       state.monsters = data.monsters;
//     },
//     getMonster(state, action) {
//       //     const {id} = action.payload;
//       //     const data = getMonsterById(id);
//       //   state.monster = data.monster;
//     },
//     addMonster(state, action) {
//       //     const data =  createMonster(action.payload);
//       //   state.monster = data.monster;
//       //   state.monsters = [data.monster, ...state.monsters];
//     },
//     editMonster(state, action) {
//       //   state.monster =  updateMonster();
//     },
//     deleteMonster(state, action) {
//       //     const {id} = action.payload;
//       //   state.monster = removeMonster(id);
//     },
//   },
  extraReducers: {
    [getMonsters.fulfilled]: (state, action) => {
        console.log(action.payload)
        state.monsters = action.payload.monsters;
    },
}
});


const { reducer } = monsterSlice;

export default reducer;
