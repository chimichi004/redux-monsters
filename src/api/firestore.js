import db from "../config/firebase";
import { v4 as uuidV4 } from "uuid";
import { collection, getDocs } from "firebase/firestore";
import { createAsyncThunk  } from "@reduxjs/toolkit";

const firestore = collection(db, "monster");

export const getMonsters = createAsyncThunk(
  "monsters/getMonsters",
  async () => {
    try {
      let monsters = [];
      const data = await getDocs(firestore);
      data.docs.map((doc) => monsters.push({...doc.data(), id: doc.id}));

     console.log( data.docs);

      return { status: "success", monsters };
    } catch (err) {
      console.log("getMonsters", err);
    }
  }
);

export const getMonsterById = async (id) => {
  try {
    let monster = {};

    const snapshot = await firestore.where("id", "=", id).get();

    snapshot.forEach((doc) => {
      monster = doc.data();
    });

    return { status: "success", monster: monster };
  } catch (err) {
    console.log("getMonsterById", err);
  }
};

export const createMonster = async (monster) => {
  try {
    const newMonster = { ...monster, id: uuidV4() };
    await firestore.doc().set(newMonster);

    return { status: "success", monster: newMonster };
  } catch (err) {
    console.log("createMonster", err);
  }
};

export const updateMonster = async (id, monster) => {
  try {
    const editedMonster = { ...monster };

    const snapshot = await firestore.where("id", "=", id).get();
    snapshot.forEach((doc) => doc.ref.update(editedMonster));

    return { status: "success", monster: editedMonster };
  } catch (err) {
    console.log("updateMonster", err);
  }
};

export const removeMonster = async (id) => {
  try {
    firestore
      .where("id", "=", id)
      .get()
      .then((snapshot) => snapshot.forEach((doc) => doc.ref.delete()));

    return { status: "success" };
  } catch (err) {
    console.log("deleteMonster", err);
  }
};
