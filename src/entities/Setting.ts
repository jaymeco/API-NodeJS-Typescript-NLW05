import { Column, PrimaryColumn, CreateDateColumn, Entity } from "typeorm";

@Entity('settings')
export class Setting {

  @PrimaryColumn()
  public readonly id: string;

  @Column()
  public username: string;

  @Column()
  public chat: boolean;

  @CreateDateColumn()
  public created_at: Date;

  @CreateDateColumn()
  public updated_at: Date;
}
