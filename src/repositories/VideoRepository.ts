import { appDataSource } from "../data-source";
import { Video } from "../entities/Video";

export const VideoRepository=appDataSource.getRepository(Video)