import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BrotherhoodService } from './brotherhood.service';
import { CreateBrotherhoodDto } from './dto/create-brotherhood.dto';
import { UpdateBrotherhoodDto } from './dto/update-brotherhood.dto';
import { Days } from '../Utils/Days';

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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brotherhoodService.findOne(+id);
  }

  @Get(':day(PalmSunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|EasterSunday)')
  find(@Param('day') day: Days) {
    return this.brotherhoodService.find(day);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrotherhoodDto: UpdateBrotherhoodDto) {
    return this.brotherhoodService.update(+id, updateBrotherhoodDto);
  }

  @Delete(':nick')
  remove(@Param('nick') nick: string) {
    return this.brotherhoodService.remove(nick);
  }
}
