
CREATE TABLE stream (
  id SERIAL PRIMARY KEY,
  title text NOT NULL,
  description text NOT NULL,
  "userId" text,
  "createdAt" TIMESTAMP WITH TIME ZONE,
  "updatedAt" TIMESTAMP WITH TIME ZONE
);
