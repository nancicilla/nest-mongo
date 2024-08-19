import { IsInt, IsNumber, IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {

    // isInt, isPositive, min 1
    @IsOptional()
    @IsNumber()
    @IsPositive()
    @Min(1)
    limit?: number;
    @IsNumber()
    @IsOptional()
    @IsPositive()
    @Min(1)
   offset?:number

}
