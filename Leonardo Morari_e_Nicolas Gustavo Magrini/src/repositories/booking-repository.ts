import { BookingModel } from '../models/booking-model';
import { CreateBookingDto } from '../models/dtos/booking-dto';

export interface BookingRepository {
  create(payload: CreateBookingDto): Promise<void>;
}
