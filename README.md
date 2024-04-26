# tech-stacts

This is something that I'm playing with to renew my skills and automatically pull together a bunch of data from repos for some analysis on the evolution
of programming languages use across a broad code base. Tech-stack stats or tech-stacts. 
The intent is to pull some statistics from some repos for metrics like:
  - languages that are in the repos
  - number of lines of code per language
  - % of code per language (calculated as (# lines of code in language-x / total lines of code * 100)
  - number of code changes per language 
  - number of code changes per language as % of all changes


The first iteraction will just retrieve stats and log to the console. Further evolution may involve writing to a database, and then setting up
a scheduler to run this automatically at regular intervals so that trends can be analyzed over time.
