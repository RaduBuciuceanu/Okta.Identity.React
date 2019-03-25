import {userRepository} from "../../data/repositories/user-repository";

export default class GetLoggedUser {
    execute() {
        return userRepository.getLoggedUser();
    }
}
