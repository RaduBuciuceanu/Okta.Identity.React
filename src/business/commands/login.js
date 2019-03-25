import {userRepository} from "../../data/repositories/user-repository";

export default class Login {
    execute(credentials) {
        return userRepository.login(credentials);
    }
}
