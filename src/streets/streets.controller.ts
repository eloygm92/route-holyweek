import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StreetsService } from './streets.service';
import { CreateStreetDto } from './dto/create-street.dto';
import { UpdateStreetDto } from './dto/update-street.dto';

@Controller('streets')
export class StreetsController {
  constructor(private readonly streetsService: StreetsService) {}

  @Post()
  create(@Body() createStreetDto: CreateStreetDto) {
    return this.streetsService.create(createStreetDto);
  }

  @Get()
  findAll() {
    return this.streetsService.findAll();
  }

  @Get(':streetName')
  findOne(@Param('streetName') streetName: string) {
    return this.streetsService.findOne(streetName);
  }

  @Patch(':streetName')
  update(
    @Param('streetName') streetName: string,
    @Body() updateStreetDto: UpdateStreetDto,
  ) {
    return this.streetsService.update(streetName, updateStreetDto);
  }

  @Delete(':streetName')
  remove(@Param('streetName') streetName: string) {
    return this.streetsService.remove(streetName);
  }
}