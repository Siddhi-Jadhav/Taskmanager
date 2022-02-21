import { UserModule } from './../user/user.module';
import { TaskRepository } from './task.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
  //use typeORM to create the table Task using repository
  //forFeature() method to define which repositories are registered in the current scope
  imports: [TypeOrmModule.forFeature([TaskRepository]), UserModule],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
