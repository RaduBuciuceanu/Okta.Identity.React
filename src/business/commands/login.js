import UserRepository from "../../data/repositories/user-repository";

export default class Login {
    #userRepository = new UserRepository();

    execute(credentials) {
        return this.#userRepository.login(credentials);
    }
}
