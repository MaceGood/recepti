import { Field, ObjectType } from "type-graphql";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToOne,
} from "typeorm";

@ObjectType()
@Entity()
export class Recipes extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  // @Field()
  // @OneToOne(() => Number)
  // createdBy: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  category: string;

  @Field(() => String)
  @Column()
  timeToPrepare: string;

  @Field(() => String)
  @Column()
  recipe: string;

  @Field(() => String)
  @Column()
  image: string;
}
