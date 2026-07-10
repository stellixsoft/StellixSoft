-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BlogPost" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL DEFAULT '',
    "content" TEXT NOT NULL,
    "contentFormat" TEXT NOT NULL DEFAULT 'html',
    "date" TEXT NOT NULL,
    "updatedAt" TEXT,
    "readTime" TEXT NOT NULL DEFAULT '5 min read',
    "category" TEXT NOT NULL DEFAULT 'Enterprise Development',
    "tags" TEXT NOT NULL DEFAULT '[]',
    "metaTitle" TEXT NOT NULL DEFAULT '',
    "metaDescription" TEXT NOT NULL DEFAULT '',
    "focusKeyword" TEXT NOT NULL DEFAULT '',
    "coverImage" TEXT,
    "coverImageAlt" TEXT NOT NULL DEFAULT '',
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL DEFAULT 'draft',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiedAt" DATETIME NOT NULL
);
INSERT INTO "new_BlogPost" ("category", "content", "contentFormat", "coverImage", "createdAt", "date", "excerpt", "featured", "focusKeyword", "id", "metaDescription", "metaTitle", "modifiedAt", "readTime", "slug", "status", "tags", "title", "updatedAt") SELECT "category", "content", "contentFormat", "coverImage", "createdAt", "date", "excerpt", "featured", "focusKeyword", "id", "metaDescription", "metaTitle", "modifiedAt", "readTime", "slug", "status", "tags", "title", "updatedAt" FROM "BlogPost";
DROP TABLE "BlogPost";
ALTER TABLE "new_BlogPost" RENAME TO "BlogPost";
CREATE UNIQUE INDEX "BlogPost_slug_key" ON "BlogPost"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
