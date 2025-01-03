import { CreateDrinkDto, DrinkResponseDto } from '../models/dtos/drink-dto';

export interface DrinkRepository {
  create(payload: CreateDrinkDto): Promise<void>;
  findAll(): Promise<DrinkResponseDto[] | null>;
}
