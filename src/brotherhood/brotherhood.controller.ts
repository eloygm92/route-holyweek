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
import { Days } from '../utils/Days.enum';
import { Public } from '../auth/decorators/public.decorator';

@Controller('brotherhood')
export class BrotherhoodController {
  constructor(private readonly brotherhoodService: BrotherhoodService) {}

  @Post()
  create(@Body() createBrotherhoodDto: CreateBrotherhoodDto) {
    return this.brotherhoodService.create(createBrotherhoodDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.brotherhoodService.findAll();
  }

  @Get('procession_days')
  findProcession_day() {
    const arrayProcessionDay = Object.keys(Days).map((name) => {
      return {
        label: name,
        value: Days[name as keyof typeof Days],
      };
    });

    return arrayProcessionDay;
  }

  @Get(':nick')
  findOne(@Param('nick') nick: string) {
    return this.brotherhoodService.findOne(nick);
  }

  @Public()
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
