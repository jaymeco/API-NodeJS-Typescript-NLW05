import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingRepository } from "../repositories/SettingRepository";

export class SettingsController {

  async create(request: Request, response: Response): Promise<Response> {
    try {
      const { chat, username } = request.body;

      const settingRepository = getCustomRepository(SettingRepository);

      const setting = settingRepository.create({ chat, username });

      await settingRepository.save(setting);

      return response.status(201).json(setting);
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }
}
