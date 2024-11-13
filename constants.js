// tiles
const wpmTile = document.querySelector(".tile_wpm");
const accuracyTile = document.querySelector(".tile_accuracy");
const timeTile = document.querySelector(".tile_time-remaining");

// text area
const textAreaInput = document.querySelector(".text-area__input");
const textAreaText = document.querySelector(".text-area__text");

// restart
const resetButton = document.querySelector(".reset");

// keyboard
const keys = document.querySelectorAll(".key");

// const word template
const word = document.querySelector("#word-template").content;

// valid keys

const validInputKeys =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz[];',./";

const ingoredkeys = ["Shift", "CapsLock"];

const punctuationOrSpace = ",.; ";

const paragraphs = [
  `Apple blossoms bloomed brightly across the field, creating a fragrant atmosphere. Bees buzzed busily, collecting nectar, while curious children eagerly explored every corner of the garden. Daylight faded into twilight.`,
  `Bicycles were lined up along the bridge, riders chatting and laughing. Colorful balloons floated above, marking the start of the festival. Delicious smells of food wafted through the bustling crowd, enticing everyone. `,
  `Clouds gathered ominously over the countryside, darkening the sky. Distant thunder rumbled, signaling an approaching storm. Excited families hurried to gather their belongings, seeking shelter from the rain that was sure to follow.`,
  `Dancing lights flickered on the lake’s surface, creating an enchanting reflection. Each step taken by the dancers seemed to resonate with the music, casting a mesmerizing spell over the audience watching intently.`,
  `Eagerly, people entered the theater, finding their seats in anticipation of the evening’s performance. Friends exchanged excited chatter, while the lights dimmed. Grins spread across faces as the curtains began to rise.`,
  `Flowers bloomed vibrantly in the garden, drawing butterflies and birds alike. Graceful movements of the insects in the warm breeze added to the serene atmosphere. Hummingbirds flitted between petals, feeding.`,
  `Hikers trekked up the mountain trail, their backpacks heavy with provisions. Inspired by the breathtaking views, they paused to take photos. Joyful laughter echoed as they reached the summit, victorious.`,
  `Ice cream vendors lined the streets, offering a wide variety of flavors. Jars of toppings glistened under the sun, tempting passersby. Kites soared above, adding color to the clear sky above.`,
  `Jukeboxes played tunes from decades past, filling the diner with nostalgia. Lively chatter filled the air, along with the aroma of sizzling food. Music seemed to transport everyone back in time.`,
  `Lush forests stretched out as far as the eye could see. Majestic trees towered overhead, their branches swaying gently in the wind. Nature’s harmony was evident in the peaceful quiet surrounding the area.`,
  `Magnificent sculptures stood tall in the city square, each one telling a story. Night fell, and the streetlights illuminated the art, casting long shadows across the cobblestone pathways. Observers paused to admire.`,
  `Neighbors gathered in the park for the annual picnic, laughter filling the air. Old friends reminisced while new bonds were formed. Plates of food were passed around, offering a variety of flavors.`,
  `Onlookers cheered as the parade began, marching bands playing lively tunes. Proud floats adorned with vibrant colors moved slowly down the street. Quirky performers in costumes entertained everyone, spreading joy.`,
  `People lined the streets, waiting for the fireworks show to begin. Quiet whispers and excited chatter filled the air. Red, white, and blue banners fluttered in the breeze, adding to the festive atmosphere.`,
  `Quietly, the train rolled into the station, its rhythmic sound calming those nearby. Riders eagerly disembarked, stretching their legs after the journey. Soft smiles were exchanged as families reunited.`,
  `Rivers flowed swiftly, reflecting the golden hues of the setting sun. Surrounded by tranquil beauty, people paused to admire the scenery. Turtles basked lazily on the riverbanks, soaking up the warmth.`,
  `The streets were decorated with vibrant banners, signaling the start of the celebration. Underneath the colorful decorations, children played games while adults chatted. Vendors sold trinkets, adding to the festive mood.`,
  `Umbrellas dotted the beach, protecting people from the midday sun. Vibrant towels lay on the sand, as families relaxed under the shade. Waves lapped gently against the shore, bringing peace.`,
  `Velvet curtains were drawn back as the stage lights brightened. With a deep breath, the actors took their positions, ready to perform. Xylophones played softly in the background, setting the tone.`,
  `Young musicians practiced diligently, their instruments resonating through the hall. Zealous in their passion, they played with enthusiasm. As the final note echoed, applause filled the room, a well deserved reward.`,
  `The old man sat by the window, staring out at the horizon. His thoughts wandered to the past, memories of days long gone. He sighed, remembering moments that could never return.`,
  `In the distance, the sound of a dog barking broke the silence. A young couple passed by, laughing as they held hands. Their love seemed fresh and untarnished by time.`,
  `The city was alive with energy. Neon lights illuminated the streets, casting an artificial glow over everything. Cars honked as they sped by, while pedestrians moved briskly to their destinations.`,
  `The bakery smelled of freshly baked bread, tempting everyone who passed by. The warm aroma filled the air, making it hard to resist stepping inside for a taste of something delicious.`,
  `Children played in the park, their laughter echoing across the open space. Some climbed the jungle gym, others ran after each other in a game of tag, carefree and full of joy.`,
  `A man stood by the fountain, gazing at the water as it danced in the light. He seemed lost in thought, unaware of the world around him, caught up in his own musings.`,
  `The train station was bustling with activity. Passengers hurried to catch their trains, while vendors sold snacks and newspapers. The sound of train whistles echoed through the station, blending with chatter.`,
  `At the café, people sipped their drinks in silence, each lost in their own thoughts. The clink of cups and saucers created a rhythmic melody, blending with the soft hum of conversation.`,
  `The bookshop was quiet, the air filled with the scent of old paper. Shelves upon shelves of stories awaited, each one holding the potential to transport the reader to another world entirely.`,
  `The park bench was empty, save for a single red scarf left behind by someone in a hurry. It fluttered in the breeze, a forgotten item in the midst of the busy world.`,
  `The waves crashed against the shore, their rhythm unbroken by the passage of time. Seagulls soared above, their calls blending with the sound of the ocean, creating a peaceful harmony.`,
  `The restaurant was full of laughter and conversation. Waiters moved quickly between tables, serving dishes that steamed with warmth. The clatter of silverware added to the lively atmosphere of the evening.`,
  `The mountains stood tall and imposing in the distance, their peaks dusted with snow. The air was crisp and fresh, carrying the scent of pine trees and earth, reminding everyone of nature’s beauty.`,
  `A single red rose sat on the table, its petals soft and delicate. The fragrance it released was intoxicating, filling the room with a sense of calm and peace, a symbol of love.`,
  `The library was a sanctuary of quiet. The only sound was the rustling of pages as readers turned them, engrossed in the stories unfolding before them. Time seemed to slow in this place.`,
  `The market was a colorful mosaic of fruits, vegetables, and spices. Vendors called out to passersby, offering their goods with a smile. The air was thick with the scents of fresh produce.`,
  `The street artist painted passionately, each stroke of the brush bringing the canvas to life. People stopped to watch, mesmerized by the transformation unfolding before their eyes, captivated by his skill.`,
  `The moon rose high above the city, casting a silvery glow over the rooftops. The streets below were quieter now, the hustle and bustle replaced by a calm, peaceful silence.`,
  `The fire crackled in the hearth, its warmth filling the room. Shadows danced on the walls, creating a cozy atmosphere. Outside, the wind howled, but inside, there was comfort and security.`,
  `Polar bears are big, white bears that live in the cold parts of the world, like the North Pole.`,
  `Internal peace is the feeling of being calm and content inside yourself, even when things around you are chaotic. It's like having a quiet place within your mind where you can go to find tranquility and solace.`,
  `Limitlessness is the idea of having no boundaries or restrictions. It's like having endless possibilities and opportunities ahead of you. When you feel limitless, you're free to dream big and chase after your goals without fear of hitting a wall.`,
  `Synchronicity is when things happen in a way that seems connected but maybe aren't supposed to be. It's like when you're thinking about someone, and then they call you out of the blue.`,
  `When you are in the flow state, everything feels just right. It's like being in a groove where everything clicks smoothly. Your mind is clear, and you're focused completely on what you're doing.`,
  `The top eateries aren't just places where you eat food. They're special spots that make you feel good and remember the food for a long time.`,
  `The big water that covers most of our world is called the ocean. It is very big and very deep, with many different kinds of animals and plants living inside it.`,
  `ChatGPT is a clever computer program that talks with people like me. It knows a lot of things and can help with questions or just have a chat.`,
  `Dogs are furry friends that many people love. They come in different shapes and sizes, from tiny ones that fit in your hand to big ones that can pull sleds.`,
  `The sky was filled with stars that night. The gentle breeze rustled the leaves, creating a soothing melody. People walked by, their footsteps echoing softly on the cobblestone streets.`,
];


const getRandomParagraph = () => {
  return paragraphs[Math.floor(Math.random() * paragraphs.length)].split(" ");
};

export {
  wpmTile,
  accuracyTile,
  timeTile,
  textAreaInput,
  textAreaText,
  getRandomParagraph,
  validInputKeys,
  resetButton,
  paragraphs,
  ingoredkeys,
  keys,
  punctuationOrSpace,
};
