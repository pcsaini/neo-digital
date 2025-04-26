-- CreateTable
CREATE TABLE "visitor" (
    "id" TEXT NOT NULL,
    "ipAddress" TEXT NOT NULL,
    "userAgent" TEXT NOT NULL,
    "visitedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "route" TEXT NOT NULL,

    CONSTRAINT "visitor_pkey" PRIMARY KEY ("id")
);
