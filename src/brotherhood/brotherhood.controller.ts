import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BrotherhoodService } from './brotherhood.service';
import { CreateBrotherhoodDto } from './dto/create-brotherhood.dto';
import { UpdateBrotherhoodDto } from './dto/update-brotherhood.dto';
import { Days } from '../Utils/Days.enum';

@Controller('brotherhood')
export class BrotherhoodController {
  constructor(private readonly brotherhoodService: BrotherhoodService) {}

  @Post()
  create(@Body() createBrotherhoodDto: CreateBrotherhoodDto) {
    return this.brotherhoodService.create(createBrotherhoodDto);
  }

  @Get()
  findAll() {
    return this.brotherhoodService.findAll();
  }

  @Get(':nick')
  findOne(@Param('nick') nick: string) {
    return this.brotherhoodService.findOne(nick);
  }

  @Get(
    ':day(PalmSunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|EasterSunday)',
  )
  find(@Param('day') day: Days) {
    return this.brotherhoodService.find(day);
  }

  @Patch(':nick')
  update(
    @Param('nick') nick: string,
    @Body() updateBrotherhoodDto: UpdateBrotherhoodDto,
  ) {
    return this.brotherhoodService.update(nick, updateBrotherhoodDto);
  }

  @Delete(':nick')
  remove(@Param('nick') nick: string) {
    return this.brotherhoodService.remove(nick);
  }
}
