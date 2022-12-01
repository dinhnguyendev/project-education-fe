import CryptoJS from "crypto-js";
import { createGameTurle } from "../../services/turtleService";

export const createGamesTurtleAction = async (data) => {
  try {
    const ischeckRole = {
      ischeckRole: true,
    };

    const ciphertext = CryptoJS.AES.encrypt(
      JSON.stringify(ischeckRole),
      "nguyenngocdinh"
    ).toString();

    if (data) {
      const req = {
        ...data,
        privateKey: ciphertext,
      };
      const res = await createGameTurle(req);
      return res;
    }
  } catch (err) {}
};
