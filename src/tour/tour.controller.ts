import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TourService } from './tour.service';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { Tour } from './entities/tour.entity';

@Controller('tour')
export class TourController {
  constructor(private readonly tourService: TourService) {}

  @Post()
  create(@Body() createTourDto: CreateTourDto): Promise<Tour> {
    return this.tourService.create(createTourDto);
  }

  @Get(':tourYear([0-9]+)')
  findYear(@Param('tourYear') tourYear: number): Promise<Tour[]> {
    return this.tourService.findYear(tourYear);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Tour> {
    return this.tourService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTourDto: UpdateTourDto,
  ): Promise<Tour> {
    return this.tourService.update(+id, updateTourDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Tour> {
    return this.tourService.remove(+id);
  }
}
