import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingRepository } from './repositories/SettingRepository';

const routes = Router();

routes.post('/settings', async (request, response)=>{
  try {
    const { chat, username } = request.body;

    const settingRepository = getCustomRepository(SettingRepository);

    const setting = await settingRepository.create({ chat, username });

    await settingRepository.save(setting);

    return response.status(201).json(setting);
  } catch (error) {
    return response.status(400).json({
      message: error.message
    })
  }

})

export { routes };
