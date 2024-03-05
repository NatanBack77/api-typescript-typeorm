import { appDataSource } from "../data-source";
import { Room } from "../entities/Room";

export const RoomRepository= appDataSource.getRepository(Room)