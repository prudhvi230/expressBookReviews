// let books = {
//       1: {"author": "Chinua Achebe","title": "Things Fall Apart", "reviews": {} },
//       2: {"author": "Hans Christian Andersen","title": "Fairy tales", "reviews": {} },
//       3: {"author": "Dante Alighieri","title": "The Divine Comedy", "reviews": {} },
//       4: {"author": "Unknown","title": "The Epic Of Gilgamesh", "reviews": {} },
//       5: {"author": "Unknown","title": "The Book Of Job", "reviews": {} },
//       6: {"author": "Unknown","title": "One Thousand and One Nights", "reviews": {} },
//       7: {"author": "Unknown","title": "Nj\u00e1l's Saga", "reviews": {} },
//       8: {"author": "Jane Austen","title": "Pride and Prejudice", "reviews": {} },
//       9: {"author": "Honor\u00e9 de Balzac","title": "Le P\u00e8re Goriot", "reviews": {} },
//       10: {"author": "Samuel Beckett","title": "Molloy, Malone Dies, The Unnamable, the trilogy", "reviews": {} }
// }

let books = {
  1: {
    author: "Chinua Achebe",
    title: "Things Fall Apart",
    isbn: "978-0385474542",
    reviews: {
      user1: { username: "reader_joe", rating: 5, comment: "A powerful portrayal of colonial impact on African society." },
      user2: { username: "litlover", rating: 4, comment: "Beautifully written, though a bit dense in places." }
    }
  },
  2: {
    author: "Hans Christian Andersen",
    title: "Fairy tales",
    isbn: "978-0141329017",
    reviews: {
      user1: { username: "storybookfan", rating: 5, comment: "Timeless tales with deep moral lessons." },
      user2: { username: "mom_of_3", rating: 4, comment: "My kids love these stories!" }
    }
  },
  3: {
    author: "Dante Alighieri",
    title: "The Divine Comedy",
    isbn: "978-0140448955",
    reviews: {
      user1: { username: "historybuff", rating: 5, comment: "A foundational work in Western literature. Challenging but worth it." }
    }
  },
  4: {
    author: "Unknown",
    title: "The Epic Of Gilgamesh",
    isbn: "978-0140449198",
    reviews: {
      user1: { username: "mythseeker", rating: 4, comment: "Fascinating glimpse into ancient Mesopotamian culture." }
    }
  },
  5: {
    author: "Unknown",
    title: "The Book Of Job",
    isbn: "978-0195297718",
    reviews: {
      user1: { username: "theologian89", rating: 5, comment: "Deep and thought-provoking. A cornerstone of biblical literature." }
    }
  },
  6: {
    author: "Unknown",
    title: "One Thousand and One Nights",
    isbn: "978-0393331660",
    reviews: {
      user1: { username: "arabianreads", rating: 5, comment: "Magical and captivating. Endless adventure." },
      user2: { username: "classicfan", rating: 4, comment: "Some stories are repetitive, but overall it's amazing." }
    }
  },
  7: {
    author: "Unknown",
    title: "Nj\u00e1l's Saga",
    isbn: "978-0140447699",
    reviews: {
      user1: { username: "vikingnerd", rating: 4, comment: "Great insight into Icelandic history and culture." }
    }
  },
  8: {
    author: "Jane Austen",
    title: "Pride and Prejudice",
    isbn: "978-1503290563",
    reviews: {
      user1: { username: "romancefan", rating: 5, comment: "Absolutely love Elizabeth and Darcy!" },
      user2: { username: "bookworm_sarah", rating: 4, comment: "Witty and elegant, but not my usual style." }
    }
  },
  9: {
    author: "Honor\u00e9 de Balzac",
    title: "Le P\u00e8re Goriot",
    isbn: "978-0140449723",
    reviews: {
      user1: { username: "frenchlitgeek", rating: 5, comment: "Brilliant social commentary and character depth." }
    }
  },
  10: {
    author: "Samuel Beckett",
    title: "Molloy, Malone Dies, The Unnamable, the trilogy",
    isbn: "978-0802144478",
    reviews: {
      user1: { username: "existential_reader", rating: 5, comment: "Bleak but brilliant. Beckett at his best." },
      user2: { username: "deepthinker", rating: 3, comment: "Interesting but very abstract and challenging." }
    }
  }
};


module.exports=books;
