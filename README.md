# web2tv
Turning the Internet into a Television.

This max patch pulls json from google trends and youtube using ajax.
I used the kimono labs api in order to create scrapers that grab the latest content, and then setup some ajax
calls in max in order to grab them. Then I converted the JSON to the max object Dict, and then rendered the text
from dict in order to throw it into the jit.gl context, and you can see a visual of what's going down!

##Missing
- The next commit will include pulling the first song of the youtube top music video page, and then applying a LFF on it so it sounds like its being played from far away. The idea is that you can see all the trends across a rendering of the earth, and in the background the top youtube video is playing. It's a way of making the internet a little more alive, and that's cool.

