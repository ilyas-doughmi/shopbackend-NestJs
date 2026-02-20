import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';


@Module({
  imports: [ConfigModule.forRoot(),TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 49713,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    autoLoadEntities: true,
    logging: true,
  }), ProductsModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
