import { AuthRepositoryImpl } from "../../../data/Repositories/AuthRepository";
import { Score } from "../../entities/userScore";

const {registerScore} = new AuthRepositoryImpl();

export const RegisterScoreAuthCase =async (score: Score ) => {
    return await registerScore(score);
}