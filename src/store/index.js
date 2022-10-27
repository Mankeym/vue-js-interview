import { createStore } from 'vuex'
import {usersStore} from "@/store/usersStore/usersStore";
export default createStore({
    modules: {
        usersStore
    }
})
