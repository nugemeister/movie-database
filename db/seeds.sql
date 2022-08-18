INSERT INTO movies (movie_name)
VALUES  ('The Shawshank Redemption'), 
        ('The Godfather'), 
        ('The Godfather: Part II'), 
        ('The Dark Knight'), 
        ('12 Angry Men');

INSERT INTO reviews (movies_id, review)
-- i copied these from letterboxd 
VALUES (1, "You can “film student” me all you want, but I'd seriously question the sanity of anyone who doesn't think this is one of the greatest films ever made."),
       (2, "I don't trust anyone who dislikes this movie."),
       (1, "good"),
       (3, "the transition between idealism to capitalism, between loyalty to family and loyalty to business. the most tragic film of a generation"),
       (5, "That was the best 1.5 hours of middle aged white dudes yelling at each other that I've ever seen."),
       (1, "he became a morgan free man"),
       (5, "it's unbelievable how many times i started counting these angry men when they were all in the same shot. newsflash: they were always 12"),
       (4, "the best superhero movie ever made. period");