-- Select all articles with their author’s email.
SELECT article.article_id, article.user_id, article.title, article.content, user.email AS author_email
FROM article
JOIN user ON article.user_id = user.id;

-- Select articles from 7th to 12th sorted by id.
SELECT *
FROM article
ORDER BY article_id ASC
LIMIT 6, 6;  -- start from 7, get the next 6 rows