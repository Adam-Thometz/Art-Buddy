\echo 'Delete and recreate art_buddy db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE art_buddy;
CREATE DATABASE art_buddy;
\connect art_buddy

\i art-buddy-schema.sql

\echo 'Delete and recreate art_buddy_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE art_buddy_test;
CREATE DATABASE art_buddy_test;
\connect art_buddy_test

\i art-buddy-schema.sql