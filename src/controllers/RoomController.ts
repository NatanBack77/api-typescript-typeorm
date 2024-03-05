import { Request, Response } from "express";
import { RoomRepository } from "../repositories/RoomRepository";
import { VideoRepository } from "../repositories/VideoRepository";
export class RoomController {
	async create(req: Request, res: Response) {
		const { name, description } = req.body;
		if (!name) {
			res.status(400).json({ massage: "o nome é obrigatório" });
		}

		try {
			const newRoom = RoomRepository.create({ name, description });
			await RoomRepository.save(newRoom);
			return res.status(201).json(newRoom);
		} catch (error) {
			console.log(error);
			res.status(500).json({ massage: "Internal Server Error" });
		}
	}
	async createVideo(req: Request, res: Response) {
		const { title, url } = req.body;
		const { idRoom } = req.params;
		if (!title) {
			return res.status(400).json({ massage: "o title é obrigatório" });
		}
		if (!url) {
			return res.status(400).json({ massage: "o url é obrigatório" });
		}
		try {
			const room = await RoomRepository.findOne({
				where: { id: Number(idRoom) },
			});
			if (!room) {
				return res.status(404).json({ msg: "Room não encontrado" });
			}
			const newVideo = VideoRepository.create({
				title,
				url,
				room,
			});
			await VideoRepository.save(newVideo);
			res.status(201).json(newVideo);

			await VideoRepository.save(newVideo);

			return res.status(201).json(newVideo);
		} catch (error) {
			console.log(error);
			res.status(500).json({ massage: "Internal Server Error" });
		}
	}
}
