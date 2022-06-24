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
import { Public } from '../auth/decorators/public.decorator';
import { TypeStreet } from '../utils/TypeStreet.enum';

@Controller('streets')
export class StreetsController {
  constructor(private readonly streetsService: StreetsService) {}

  @Post()
  create(@Body() createStreetDto: CreateStreetDto) {
    return this.streetsService.create(createStreetDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.streetsService.findAll();
  }

  @Get('types')
  findTypes() {
    const arrayType = Object.keys(TypeStreet).map((name) => {
      return {
        label: name,
        value: TypeStreet[name as keyof typeof TypeStreet],
      };
    });

    return arrayType;
  }

  @Get('tags')
  async getTags() {
    const allStreets = await this.streetsService.findAll();

    const tags = [];
    for (const street of allStreets) {
      tags.push({
        key: street._id,
        label: street.type + ' ' + street.name,
      });
    }

    return tags;
  }

  @Public()
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
