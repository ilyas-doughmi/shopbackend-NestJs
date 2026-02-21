import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AuthGuard } from 'src/auth/auth/auth.guard';
import { RequireRoles } from 'src/auth/decorators/roles.decorators';
import { Roles } from 'src/users/entities/user.entity';
import { RolesGuard } from 'src/auth/roles/roles.guard';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseGuards(AuthGuard,RolesGuard)
  @RequireRoles(Roles.Admin)
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get('')
  @UseGuards(AuthGuard)
  findAll(@Query('limit') limit:number, @Query('page') page:number) 
  {
    return this.productsService.findAll(limit,page);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @RequireRoles(Roles.Admin)
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @RequireRoles(Roles.Admin)
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
