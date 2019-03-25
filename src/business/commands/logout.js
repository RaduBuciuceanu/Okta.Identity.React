import {userRepository} from "../../data/repositories/user-repository";

export default class Logout {
    execute() {
        return userRepository.logout();
    }
}
