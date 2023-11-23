import {collection, getDocs} from "firebase/firestore";
import db from "../../firebase/init.js";

class DatabaseService {
    async getCollection(name) {
        const col = collection(db, name);
        const colSnapshot = await getDocs(col);
        return colSnapshot.docs.map(doc => doc.data());
    }
}

export default new DatabaseService()