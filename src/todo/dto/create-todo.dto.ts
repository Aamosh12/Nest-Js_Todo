import { IsDateString, IsEmpty, IsNotEmpty, IsString } from "class-validator";

export class CreateTodoDto {
    
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    @IsDateString()
    readonly createdAt: Date;
}