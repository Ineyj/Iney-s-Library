const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "images/GG.jpeg",
    genre: "A classic novel of the Jazz Age",
    price: "$10.00",
    fullDescription:
      "The Great Gatsby is a novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby as he witnesses Gatsby's obsession with reuniting with his former lover, Daisy Buchanan."
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    image: "images/1984.jpeg",
    genre: "A dystopian tale of surveillance and control.",
    price: "$15.00",
    fullDescription:
      "Yearning for the opportunity of freedom, a humble, Outer Circle administrator of the Ministry of Truth, Winston Smith, musters up the boldness to record his implicit wants in his little mysterious diary, in itself an unlawful demonstration. Serving quietly at the delight of the dismal, dictatorial hyper-province of Oceania, Smith acknowledges the INGSOC`s incomparable pioneer Big Brother who keeps a close eye on him.The totalitarian government tightens its hold on its subject. Smith comes across Julia who is also a rebel and a dangerous affair starts. There’s no turning around. This couple has to pay at some point for their relationship. The waters of rebellions also start to boil and in the midst of the storm Smith changes his loyalty and turn into a supporter of the Party."
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "images/MJ.jpeg",
    genre: "A story of racial injustice and childhood innocence.",
    price: "$12.00",
    fullDescription:
      "The novel is a Southern Gothic and Bildungsroman, and its primary themes involve racial injustice and the destruction of innocence. Other themes include class, courage, compassion, and gender roles in the Deep South. The novel emphasizes tolerance and decry prejudice. Some key facts about the novel include its title, publication year, number of pages, literary period, genre, point of view, setting, and climax."
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    image: "images/PP.jpeg",
    genre: "A romantic novel of manners",
    price: "$20.00",
    fullDescription:
      " “Pride and Prejudice” by Jane Austen is a classic novel set in rural England in the early 19th century. The story revolves around Elizabeth Bennet, the second of five daughters in the Bennet family. The Bennets are not wealthy, and because they have no sons, their estate will be inherited by a distant relative, Mr. Collins.The novel begins with the arrival of Mr. Bingley, a wealthy and handsome young gentleman, who rents the large house of Netherfield Park. He brings with him his friend, Mr. Darcy, who is even wealthier but appears proud and aloof. Mr. Bingley quickly becomes attached to Jane Bennet, Elizabeth’s beautiful older sister, but Mr. Darcy remains distant and haughty, earning the dislike of the local community."
  },
  {
    id: 5,
    title: "The Silent Wife",
    author: " Kerry Fisher",
    image: "images/5.jpg",
    genre: "Fiction / Classic",
    price: "$15.00",
    fullDescription:
      " The novel follows Jodi Brett and Todd Gilbert, a couple in their mid-forties who have been together for 20 years. Todd is a real estate developer; Jodi is a psychotherapist who sees a small number of clients in her home. Despite their long relationship, they are not married and do not have children."
  },
  {
    id: 6,
    title: "Someone Else's Daughter",
    author: " Jennifer Harvey",
    image: "images/6.jpg",
    genre: "Fiction / Classic",
    price: "$19.00",
    fullDescription:
      " Thirteen years ago, Miranda Steele's abusive husband stole her newborn baby daughter and gave her up for adoption. Now Miranda thinks she's close to finding her. Until she finds the body of a young teen in the woods. Is this her daughter? And will the handsome detective investigating the case help her?"
  },
  {
    id: 7,
    title: "The Girl With Two Dads",
    author: " Mel Elliott ",
    image: "images/7.jpg",
    genre: "Fiction / Classic",
    price: "$10.00",
    fullDescription:
      "Matilda is a new girl at Pearl's school, but there's something really different and cool about her family she has TWO dads!Pearl is sure that Matilda's family must be very different to her own but, as they become friends, she starts to discover that maybe Matilda's family aren't so different after all ...A funny and heart-warming tale featuring a same-sex parent family."
  },
  {
    id: 8,
    title: "Daddys Girl",
    author: "Lisa Scottoline",
    image: "images/8.jpg",
    genre: "Fiction / Classic",
    price: "$12.00",
    fullDescription:
      "The unlikely heroine of this Lisa Scottoline thriller (which follows 2006's Dirty Blonde), mousy University of Pennsylvania assistant law professor Natalie Nat Greco, finds herself in way over her head when an unintended visit to a minimum-security prison in nearby Chester County puts her in the middle of a deadly uprising -- and places her at the center of an elaborate plot that involves an incarcerated crime boss and more than a few improbable conspirators."
  },
  {
    id: 9,
    title: "The Mind Of The Leader",
    author: "Arne Soranson ",
    image: "images/9.jpg",
    genre: "A Motivational Book",
    price: "$21.00",
    fullDescription:
      "The Mind of the Leader is a book that aims to make corporations more people-centric to achieve great results. The book is written in English and has 256 pages. The book description highlights that the world is facing a global leadership crisis, and that 77% of leaders think they do a good job of engaging their people, yet 88% of employees say their leaders don't engage enough. The book contains a table of contents."
  },
  {
    id: 10,
    title: "Belive In Yourself",
    author: "Simpiney Joel",
    image: "images/10.jpg",
    genre: "A Motivational Book",
    price: "$15.00",
    fullDescription:
      " In Believe in Yourself Dr. Simpiney shows you how the power of believing in yourself will help you achieve your dreams. He illustrates his points with wonderful stories about how inventors, writers, artists, and entrepreneurs have used this power to reach the highest of heights."
  },
  {
    id: 11,
    title: "Successful Women Think Differently",
    author: "Valorie Burton ",
    image: "images/11.jpg",
    genre: "A Motivational Book",
    price: "$17.00",
    fullDescription:
      "Award-winning author and life coach Valorie Burton teaches research-based, spiritually grounded habits that help you:Identify and enhance your thinking style and mindsetUnlock the resilience-boosting power of positive emotionReplace overwhelm and regret with clarity and contentmentBecome more decisive and confidentBounce back from setbacks faster and stronger than everWith over 100 self-coaching questions, this book helps you lay the foundation for authentic success a life of true purpose, resilience and joy."
  },
  {
    id: 12,
    title: "Before I Forget",
    author: " B. Smith & Dan Gasby",
    image: "images/12.jpg",
    genre: "Love,Hope, and Acceptance.",
    price: "$12.00",
    fullDescription:
      " Crafted in short chapters that interweave their narrative with practical and helpful advice, readers learn about dealing with Alzheimer's day-to-day challenges: the family realities and tensions, ways of coping, coming research that may tip the scale, as well as lessons learned along the way."
  },

  
];

function loadBookDetails() {
  const selectedId = parseInt(localStorage.getItem("selectedBookId"));
  const book = books.find((b) => b.id === selectedId);

  if (!book) {
    document.getElementById("book-detail").innerHTML = "<p>Book not found.</p>";
    return;
  }

  const detailHTML = `
    <div class="book-image">
      <img src="${book.image}" alt="${book.title}">
    </div>
    <div class="book-info">
      <h2>${book.title}</h2>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Genre:</strong> ${book.genre}</p>
      <p><strong>Price:</strong> ${book.price}</p>
      <p class="description">${book.fullDescription}</p>
    </div>
  `;

  document.getElementById("book-detail").innerHTML = detailHTML;
}

window.onload = loadBookDetails;
