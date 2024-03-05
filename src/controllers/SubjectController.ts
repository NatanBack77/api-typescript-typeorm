import { Request, Response } from "express";
import { subjectRepository } from "../repositories/SubjectRepository";

export class SubjectController {
	async create(req: Request, res: Response) {
		const { name } = req.body;
		if (!name) {
			return res.status(400).json({ massagem: "o nome é obrigatório" });
		}
		try {
            const newSubject= subjectRepository.create({name})
            await subjectRepository.save(newSubject)
            return res.status(201).json(newSubject)

		} catch (error){
			console.log(error)
            res.status(500).json({massagem:"Internal Server Error"})
		}
	}
}
