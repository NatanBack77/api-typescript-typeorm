import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1709506386881 implements MigrationInterface {
    name = 'Default1709506386881'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" ADD "description" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" DROP COLUMN "description"`);
    }

}
