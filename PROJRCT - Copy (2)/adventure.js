// Adventure Books Database
const adventureBooks = [
  {
    id: 1,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "fantasy",
    category: "Fantasy Adventure",
    publicationYear: 1937,
    pages: 310,
    rating: 4.8,
    availability: "In Stock",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=center",
    description: "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep to whisk him away on an adventure.",
    longDescription: "The Hobbit is a fantasy novel by English author J.R.R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book remains popular and is recognized as a classic in children's literature.",
    themes: ["Courage", "Friendship", "Adventure", "Home"],
    awards: ["Carnegie Medal Nominee", "New York Herald Tribune Award"],
    isbn: "978-0547928241",
    publisher: "Houghton Mifflin Harcourt",
    language: "English",
    format: "Hardcover",
    series: "Middle-earth Universe"
  },
  {
    id: 2,
    title: "Treasure Island",
    author: "Robert Louis Stevenson",
    genre: "action",
    category: "Action Adventure",
    publicationYear: 1883,
    pages: 272,
    rating: 4.6,
    price: "$12.99",
    availability: "In Stock",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=center",
    description: "A classic adventure novel about pirates, buried treasure, and the coming-of-age of young Jim Hawkins. When an old sailor dies at the Admiral Benbow Inn, Jim discovers a treasure map in his sea chest.",
    longDescription: "Treasure Island is an adventure novel by Scottish author Robert Louis Stevenson, narrating a tale of 'buccaneers and buried gold'. Its influence is enormous on popular perceptions of pirates, including such elements as treasure maps marked with an 'X', schooners, the Black Spot, tropical islands, and one-legged seamen carrying parrots on their shoulders.",
    themes: ["Pirates", "Treasure Hunt", "Coming of Age", "Loyalty"],
    awards: ["Classic Literature"],
    isbn: "978-0141321004",
    publisher: "Penguin Classics",
    language: "English",
    format: "Paperback",
    series: "Standalone"
  },
  {
    id: 3,
    title: "The Call of the Wild",
    author: "Jack London",
    genre: "survival",
    category: "Survival Adventure",
    publicationYear: 1903,
    pages: 172,
    rating: 4.7,
    price: "$11.99",
    availability: "In Stock",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=600&fit=crop&crop=center",
    description: "Buck, a domesticated dog, is stolen from his home and sold into service as a sled dog in Alaska. He gradually reverts to a wild state as he adapts to the harsh environment and learns to survive in the wild.",
    longDescription: "The Call of the Wild is a short adventure novel by Jack London published in 1903. The story is set in the Yukon during the 1890s Klondike Gold Rush—a period when strong sled dogs were in high demand. The novel's central character is a dog named Buck, a domesticated dog living at a ranch in the Santa Clara Valley of California.",
    themes: ["Survival", "Nature", "Transformation", "Instinct"],
    awards: ["Classic Literature"],
    isbn: "978-0141321059",
    publisher: "Penguin Classics",
    language: "English",
    format: "Paperback",
    series: "Standalone"
  },
  {
    id: 4,
    title: "Journey to the Center of the Earth",
    author: "Jules Verne",
    genre: "fantasy",
    category: "Science Fiction Adventure",
    publicationYear: 1864,
    pages: 240,
    rating: 4.4,
    price: "$13.99",
    availability: "Limited Stock",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&crop=center",
    description: "Professor Lidenbrock discovers a manuscript that reveals a path to the center of the Earth. He embarks on an expedition with his nephew Axel and their guide Hans, descending into an Icelandic volcano.",
    longDescription: "Journey to the Center of the Earth is a classic 1864 science fiction novel by Jules Verne. The story involves German professor Otto Lidenbrock who believes there are volcanic tubes going toward the center of the Earth. He, his nephew Axel, and their guide Hans descend into the Icelandic volcano Snæfellsjökull, encountering many adventures, including prehistoric animals and natural hazards.",
    themes: ["Exploration", "Science", "Discovery", "Courage"],
    awards: ["Classic Science Fiction"],
    isbn: "978-0141321028",
    publisher: "Penguin Classics",
    language: "English",
    format: "Paperback",
    series: "Voyages Extraordinaires"
  },
  {
    id: 5,
    title: "Hatchet",
    author: "Gary Paulsen",
    genre: "survival",
    category: "Survival Adventure",
    publicationYear: 1987,
    pages: 208,
    rating: 4.5,
    price: "$9.99",
    availability: "In Stock",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&crop=center",
    description: "Thirteen-year-old Brian Robeson is on his way to visit his father when the single-engine plane in which he is flying crashes. Suddenly, Brian finds himself alone in the Canadian wilderness with nothing but his clothing, a tattered windbreaker, and the hatchet his mother had given him as a present.",
    longDescription: "Hatchet is a 1986 Newbery Honor-winning young-adult wilderness survival novel written by Gary Paulsen. It is the first novel of five in the Brian's Saga series. The novel deals with themes of survival, determination, and self-reliance as Brian learns to survive in the wilderness after a plane crash.",
    themes: ["Survival", "Self-reliance", "Resilience", "Nature"],
    awards: ["Newbery Honor", "ALA Best Book for Young Adults"],
    isbn: "978-1416936473",
    publisher: "Simon & Schuster",
    language: "English",
    format: "Paperback",
    series: "Brian's Saga"
  },
  {
    id: 6,
    title: "The Maze Runner",
    author: "James Dashner",
    genre: "mystery",
    category: "Mystery Adventure",
    publicationYear: 2009,
    pages: 375,
    rating: 4.3,
    price: "$16.99",
    availability: "In Stock",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&crop=center",
    description: "Thomas wakes up in an elevator, remembering nothing but his own name. He's surrounded by strangers—boys who also have no memories of who they are or how they got there. Outside the towering stone walls that surround them is a limitless, ever-changing maze.",
    longDescription: "The Maze Runner is a 2009 young adult dystopian science fiction novel written by American author James Dashner and the first book released in The Maze Runner series. The novel was published on October 6, 2009, by Delacorte Press, an imprint of Random House, and was made into a 2014 major motion picture by 20th Century Fox.",
    themes: ["Memory", "Survival", "Mystery", "Friendship"],
    awards: ["New York Times Bestseller"],
    isbn: "978-0385737944",
    publisher: "Delacorte Press",
    language: "English",
    format: "Hardcover",
    series: "The Maze Runner"
  },
  {
    id: 7,
    title: "Percy Jackson: The Lightning Thief",
    author: "Rick Riordan",
    genre: "fantasy",
    category: "Fantasy Adventure",
    publicationYear: 2005,
    pages: 377,
    rating: 4.6,
    price: "$14.99",
    availability: "In Stock",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&crop=center",
    description: "Percy Jackson is a twelve-year-old boy who discovers he is a demigod, the son of a mortal woman and the Greek god Poseidon. He must prevent a war between the gods by finding Zeus's stolen lightning bolt.",
    longDescription: "The Lightning Thief is a 2005 fantasy-adventure novel written by Rick Riordan, based on Greek mythology and the first novel in the Percy Jackson & the Olympians series. It won the Best Book Award from School Library Journal and was on The New York Times Best Seller list for children's books.",
    themes: ["Greek Mythology", "Identity", "Friendship", "Courage"],
    awards: ["School Library Journal Best Book", "New York Times Bestseller"],
    isbn: "978-0786838653",
    publisher: "Disney Hyperion",
    language: "English",
    format: "Hardcover",
    series: "Percy Jackson & the Olympians"
  },
  {
    id: 8,
    title: "Around the World in 80 Days",
    author: "Jules Verne",
    genre: "action",
    category: "Action Adventure",
    publicationYear: 1872,
    pages: 256,
    rating: 4.2,
    price: "$12.99",
    availability: "In Stock",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&crop=center",
    description: "Phileas Fogg, a wealthy English gentleman, makes a bet that he can travel around the world in eighty days. Accompanied by his French valet Passepartout, he sets out on an incredible journey.",
    longDescription: "Around the World in Eighty Days is an adventure novel by the French writer Jules Verne, first published in French in 1872. In the story, Phileas Fogg of London and his newly employed French valet Passepartout attempt to circumnavigate the world in 80 days on a £20,000 wager set by his friends at the Reform Club.",
    themes: ["Travel", "Time", "Adventure", "Determination"],
    awards: ["Classic Literature"],
    isbn: "978-0141321004",
    publisher: "Penguin Classics",
    language: "English",
    format: "Paperback",
    series: "Voyages Extraordinaires"
  },
  {
    id: 9,
    title: "Robinson Crusoe",
    author: "Daniel Defoe",
    genre: "survival",
    category: "Survival Adventure",
    publicationYear: 1719,
    pages: 288,
    rating: 4.1,
    price: "$11.99",
    availability: "Limited Stock",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&crop=center",
    description: "Robinson Crusoe is shipwrecked on a deserted island and must learn to survive with only his wits and the few supplies he can salvage from the wreck. He builds a home, hunts for food, and eventually encounters other people.",
    longDescription: "Robinson Crusoe is a novel by Daniel Defoe, first published on 25 April 1719. The first edition credited the work's protagonist Robinson Crusoe as its author, leading many readers to believe he was a real person and the book a travelogue of true incidents. The book is presented as an autobiography of the title character, a castaway who spends 28 years on a remote tropical desert island near the coasts of Venezuela and Trinidad.",
    themes: ["Survival", "Isolation", "Self-reliance", "Colonization"],
    awards: ["Classic Literature"],
    isbn: "978-0141439822",
    publisher: "Penguin Classics",
    language: "English",
    format: "Paperback",
    series: "Standalone"
  },
  {
    id: 10,
    title: "The Lost World",
    author: "Arthur Conan Doyle",
    genre: "mystery",
    category: "Mystery Adventure",
    publicationYear: 1912,
    pages: 320,
    rating: 4.0,
    price: "$13.99",
    availability: "In Stock",
    image: "images/lost-world.jpg",
    description: "Professor Challenger leads an expedition to a plateau in South America where prehistoric creatures still exist. The team must survive encounters with dinosaurs and other ancient beasts while exploring this mysterious land.",
    longDescription: "The Lost World is a science fiction novel by British writer Arthur Conan Doyle, published in 1912, concerning an expedition to a plateau in the Amazon basin of South America where prehistoric animals still survive. It was originally published serially in the Strand Magazine and illustrated by New-Zealand-born artist Harry Rountree during the months of April–November 1912.",
    themes: ["Exploration", "Prehistoric Life", "Science", "Adventure"],
    awards: ["Classic Science Fiction"],
    isbn: "978-0141321004",
    publisher: "Penguin Classics",
    language: "English",
    format: "Paperback",
    series: "Professor Challenger"
  }
];

// Global variables
let currentFilter = 'all';
let filteredBooks = [...adventureBooks];

// DOM elements
const booksContainer = document.getElementById('books-container');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('book-details-modal');
const modalContent = document.getElementById('modal-book-content');
const closeBtn = document.querySelector('.close');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  displayBooks(filteredBooks);
  setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
  // Search functionality
  searchInput.addEventListener('input', function() {
    searchBooks();
  });

  // Modal close functionality
  closeBtn.addEventListener('click', function() {
    closeModal();
  });

  // Close modal when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
}

// Display books in the grid
function displayBooks(books) {
  booksContainer.innerHTML = '';
  
  if (books.length === 0) {
    booksContainer.innerHTML = '<div class="no-results"><p>No books found matching your criteria.</p></div>';
    return;
  }

  books.forEach(book => {
    const bookCard = createBookCard(book);
    booksContainer.appendChild(bookCard);
  });
}

// Create individual book card
function createBookCard(book) {
  const card = document.createElement('div');
  card.className = 'book-card';
  card.innerHTML = `
    <div class="book-image">
      <img src="${book.image}" alt="${book.title}" onerror="this.src='images/default-book.jpg'">
      <div class="book-overlay">
        <button class="view-details-btn" onclick="openBookDetails(${book.id})">View Details</button>
      </div>
    </div>
    <div class="book-info">
      <h3 class="book-title">${book.title}</h3>
      <p class="book-author">by ${book.author}</p>
      <p class="book-category">${book.category}</p>
      <div class="book-rating">
        <span class="stars">${'★'.repeat(Math.floor(book.rating))}${'☆'.repeat(5-Math.floor(book.rating))}</span>
        <span class="rating-number">${book.rating}</span>
      </div>
      <p class="book-price">${book.price}</p>
      <p class="book-availability ${book.availability === 'In Stock' ? 'in-stock' : 'limited-stock'}">${book.availability}</p>
    </div>
  `;
  return card;
}

// Filter books by category
function filterBooks(category) {
  currentFilter = category;
  
  // Update active filter button
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  // Filter books
  if (category === 'all') {
    filteredBooks = [...adventureBooks];
  } else {
    filteredBooks = adventureBooks.filter(book => book.genre === category);
  }
  
  // Apply search filter if there's a search term
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm) {
    filteredBooks = filteredBooks.filter(book => 
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm) ||
      book.description.toLowerCase().includes(searchTerm)
    );
  }
  
  displayBooks(filteredBooks);
}

// Search books
function searchBooks() {
  const searchTerm = searchInput.value.toLowerCase();
  
  if (currentFilter === 'all') {
    filteredBooks = adventureBooks.filter(book => 
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm) ||
      book.description.toLowerCase().includes(searchTerm)
    );
  } else {
    filteredBooks = adventureBooks.filter(book => 
      book.genre === currentFilter &&
      (book.title.toLowerCase().includes(searchTerm) ||
       book.author.toLowerCase().includes(searchTerm) ||
       book.description.toLowerCase().includes(searchTerm))
    );
  }
  
  displayBooks(filteredBooks);
}

// Open book details modal
function openBookDetails(bookId) {
  const book = adventureBooks.find(b => b.id === bookId);
  if (!book) return;
  
  modalContent.innerHTML = `
    <div class="book-details-header">
      <div class="book-details-image">
        <img src="${book.image}" alt="${book.title}" onerror="this.src='images/default-book.jpg'">
      </div>
      <div class="book-details-info">
        <h2>${book.title}</h2>
        <p class="author">by ${book.author}</p>
        <div class="rating">
          <span class="stars">${'★'.repeat(Math.floor(book.rating))}${'☆'.repeat(5-Math.floor(book.rating))}</span>
          <span class="rating-number">${book.rating}/5</span>
        </div>
        <p class="price">${book.price}</p>
        <p class="availability ${book.availability === 'In Stock' ? 'in-stock' : 'limited-stock'}">${book.availability}</p>
      </div>
    </div>
    
    <div class="book-details-body">
      <div class="book-meta">
        <div class="meta-item">
          <strong>Category:</strong> ${book.category}
        </div>
        <div class="meta-item">
          <strong>Publication Year:</strong> ${book.publicationYear}
        </div>
        <div class="meta-item">
          <strong>Pages:</strong> ${book.pages}
        </div>
        <div class="meta-item">
          <strong>ISBN:</strong> ${book.isbn}
        </div>
        <div class="meta-item">
          <strong>Publisher:</strong> ${book.publisher}
        </div>
        <div class="meta-item">
          <strong>Language:</strong> ${book.language}
        </div>
        <div class="meta-item">
          <strong>Format:</strong> ${book.format}
        </div>
        <div class="meta-item">
          <strong>Series:</strong> ${book.series}
        </div>
      </div>
      
      <div class="book-description">
        <h3>Description</h3>
        <p>${book.longDescription}</p>
      </div>
      
      <div class="book-themes">
        <h3>Themes</h3>
        <div class="theme-tags">
          ${book.themes.map(theme => `<span class="theme-tag">${theme}</span>`).join('')}
        </div>
      </div>
      
      <div class="book-awards">
        <h3>Awards & Recognition</h3>
        <ul>
          ${book.awards.map(award => `<li>${award}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
  
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Utility function to format text
function formatText(text, maxLength = 100) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}