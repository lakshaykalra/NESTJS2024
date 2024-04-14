import { Controller, Get, Param } from '@nestjs/common';

@Controller('company')
export class GetCompanyController {
  @Get('/:id/:name')
  findOne(@Param() param: Record<string, any>): Record<string, any> {
    return { id: param.id, name: param.name };
  }
}
