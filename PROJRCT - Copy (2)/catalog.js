const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A classic novel of the Jazz Age.",
      image: "images/GG.jpeg"
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      description: "A dystopian tale of surveillance and control.",
      image: "images/1984.jpeg"
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "A story of racial injustice and childhood innocence.",
      image: "images/MJ.jpeg"
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      description: "A romantic novel of manners.",
      image: "images/PP.jpeg"
    },
    {
      id: 5,
      title: "The Silent Wife",
      author: "Kerry Fisher",
      description: "A Gripping Emotional Page.",
      image: "images/5.jpg"
    },
    {
      id: 6,
      title: "Someone Else's Daughter",
      author: "Jennifer Harvey",
      description: "A Tragedy.",
      image: "images/6.jpg"
    },
    {
      id: 7,
      title: "The Girl With Two Dads",
      author: "Mel Elliott",
      description: "A Kid's Faviorite.",
      image: "images/7.jpg"
    },
    {
      id: 8,
      title: "Daddy's Girl",
      author: "Lisa Scottoline",
      description: "When justice comes at a very high price.",
      image: "images/8.jpg"
    },
    {
      id: 9,
      title: "The Mind Of The Leader",
      author: "Arne Soranson",
      description: "A Motivational Book.",
      image: "images/9.jpg"
    },
    {
      id: 10,
      title: "Belive In Yourself",
      author: "Simpiney Joel",
      description: "The Power Of Your Subconscious Mind.",
      image: "images/10.jpg"
    },
    {
      id: 11,
      title: "Successful Women Think Differently",
      author: "Valorie Burton",
      description: "9 Habits to make you Happier,Healthier, More Resilient .",
      image: "images/11.jpg"
    },
    {
      id: 12,
      title: "Before I Forget",
      author: "B. Smith & Dan Gasby",
      description: "Love,Hope, and Acceptance.",
      image: "images/12.jpg"
    }
  ];
  
  function displayCatalog() {
    const listContainer = document.getElementById("book-list");
    books.forEach(book => {
      const card = document.createElement("div");
      card.className = "book-card";
      card.innerHTML = `
        <img src="${book.image}" alt="${book.title} cover">
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p>${book.description}</p>
        <button onclick="viewBook(${book.id})">View Details</button>
      `;
      listContainer.appendChild(card);
    });
  }
  
  function viewBook(bookId) {
    localStorage.setItem("selectedBookId", bookId);
    window.location.href = "Detail.html";
  }
  
  window.onload = function () {
    if (document.getElementById("book-list")) {
      displayCatalog();
    }
  };
  