import { Subject } from "../entities/Subject";
import { appDataSource } from "../data-source";

export const subjectRepository = appDataSource.getRepository(Subject)
