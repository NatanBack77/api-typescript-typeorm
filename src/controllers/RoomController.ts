import { Request, Response } from 'express'
import { RoomRepository } from '../repositories/RoomRepository'
import { VideoRepository } from '../repositories/VideoRepository'
import { subjectRepository } from '../repositories/SubjectRepository'
import { Subject } from 'typeorm/persistence/Subject'
import { Room } from '../entities/Room'


export class RoomController {
	async create(req: Request, res: Response) {
		const { name, description } = req.body
		const newRoom = RoomRepository.create({ name, description })
		await RoomRepository.save(newRoom)

		return res.status(201).json(newRoom)
	}

	async createVideo(req: Request, res: Response) {
		const { title, url } = req.body
		const { idRoom } = req.params

		const room = await RoomRepository.findOne({
			where: { id: Number(idRoom) },
		});
		if (!room) {
			return res.status(404).json({ msg: "Room não encontrado" });
		}

	    if(!room){
			res.status
		}
		const newVideo = await VideoRepository.create({
			title,
			url,
			room,
		})

		await VideoRepository.save(newVideo)

		return res.status(201).json(newVideo)
	}

	async roomSubject(req: Request, res: Response) {
		const { subject_id } = req.body
		const { idRoom } = req.params

		const room = await RoomRepository.findOneBy({ id: Number(idRoom) })

	

		const subject = await subjectRepository.findOneBy({
			id: Number(subject_id),
		})

	

		const roomUpdate : any | null = {
			...room,
			subjects: [subject],
		}

		await RoomRepository.save(roomUpdate)

		return res.status(204).send()
	}

	async list(req: Request, res: Response) {
		const rooms = await RoomRepository.find({
			relations: {
				subjects: true,
				videos: true,
			},
		})

		return res.json(rooms)
	}
}