import {
  Controller,
  Get,
  Param,
  Res,
  Body,
  Post,
  HttpCode,
  Redirect,
} from '@nestjs/common';
import { Response } from 'express';

import { CreateCompanyRequestDto } from './create-company.request.dto';

@Controller('company')
export class CompanyController {
  @Get('/:id')
  findOne(
    @Param() param: Record<string, any>,
    @Res() response: Response,
  ): Record<string, any> {
    return response.status(201).send({ id: param.id, name: 'test' });
  }

  @Post()
  @HttpCode(201)
  createCompany(@Body() company: CreateCompanyRequestDto) {
    return company;
  }

  @Get('/old/v1')
  @Redirect('https://nestjs.com', 301)
  getOld() {}
}
