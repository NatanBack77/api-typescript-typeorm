import { Request, Response } from 'express'
import { RoomRepository } from '../repositories/RoomRepository'
import { BadRequestError } from '../helpers/api-errors'
import { VideoRepository } from '../repositories/VideoRepository'
import { subjectRepository } from '../repositories/SubjectRepository'

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

		const room = await RoomRepository.findOneBy({ id: Number(idRoom) })

		if (!room) {
			throw new BadRequestError('Aula não existe')
		}

		const newVideo = VideoRepository.create({
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

		if (!room) {
			throw new BadRequestError('Aula não existe')
		}

		const subject = await subjectRepository.findOneBy({
			id: Number(subject_id),
		})

		if (!subject) {
			throw new BadRequestError('Disciplina não existe')
		}

		const roomUpdate = {
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