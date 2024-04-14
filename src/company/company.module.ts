import { Module } from '@nestjs/common';
import { GetCompanyModule } from './get-company/get-company.module';

@Module({
  imports: [GetCompanyModule],
})
export class CompanyModule {}
