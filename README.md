# The Odin Project HashMap

In this project, I implemented a hash map. The hash function is taken directly from the odin project. I did not do the extra credit and chose to implement this with factories. When collisions happen, I reference the newest addition to the end of a linked list. During setting, the buckets will double if load factor has been reached. main.js contains the testing code.