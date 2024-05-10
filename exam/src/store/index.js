import axios from "axios";
import { createStore } from "vuex";
import users from './users';
import tasks from './tasks';

export default createStore({
    modules:{
        users,
        tasks
    }
})