/*
  Warnings:

  - You are about to drop the column `key` on the `Sentence` table. All the data in the column will be lost.
  - You are about to drop the column `key` on the `Word` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[label]` on the table `Sentence` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[label]` on the table `Word` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `label` to the `Sentence` table without a default value. This is not possible if the table is not empty.
  - Added the required column `label` to the `Word` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Sentence_key_key";

-- DropIndex
DROP INDEX "Word_key_key";

-- AlterTable
ALTER TABLE "Sentence" DROP COLUMN "key",
ADD COLUMN     "label" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Word" DROP COLUMN "key",
ADD COLUMN     "label" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Translation" (
    "id" SERIAL NOT NULL,
    "wordId" INTEGER,
    "sentenceId" INTEGER,
    "locale" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Translation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sentence_label_key" ON "Sentence"("label");

-- CreateIndex
CREATE UNIQUE INDEX "Word_label_key" ON "Word"("label");

-- AddForeignKey
ALTER TABLE "Translation" ADD CONSTRAINT "Translation_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Translation" ADD CONSTRAINT "Translation_sentenceId_fkey" FOREIGN KEY ("sentenceId") REFERENCES "Sentence"("id") ON DELETE SET NULL ON UPDATE CASCADE;
