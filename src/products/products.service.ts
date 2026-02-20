import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Not, Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ){}
  create(createProductDto: CreateProductDto) {
    const newProduct = this.productRepository.create(createProductDto);

    return this.productRepository.save(newProduct);
  }

  findAll(limit: number, page: number) {
    if(!limit || !page)
    {
      return this.productRepository.find();
    }
    const dataShown = (page - 1) * limit;
    
    return this.productRepository.find({
      take: limit,
      skip: dataShown,
    });
  }

  async findOne(id: string) {
    const product =  this.productRepository.findOneBy({id});

    if(!product){
      throw new NotFoundException('product not found');
    }
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.preload({
      id: id,
      ... updateProductDto,
    })
    if(!product){
      throw new NotFoundException('product not found');
    }

    return this.productRepository.save(product);
  }

  async remove(id: string) {
    const result = await this.productRepository.delete(id);

    if(result.affected === 0)
    {
      throw new NotFoundException(`Product #${id} Not Found`);
    }
    return {message: `Product #${id} has been deleted`};  
  }
}
