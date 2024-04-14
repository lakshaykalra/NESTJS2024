import { Module } from '@nestjs/common';
import { GetCompanyController } from './get-company.controller';

@Module({
  controllers: [GetCompanyController],
})
export class GetCompanyModule {}
