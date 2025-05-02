import axios from "axios";
import { faker } from "@faker-js/faker";
import fs from "fs";
import FormData from "form-data";

const API_URL = "https://shelfshare-v2.vercel.app/api/book";
const NUMBER_OF_BOOKS = 25;
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MDY0MjU3NzY2ZjBkMTljZDEzNGQxZCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc0NjA1Mjk5OCwiZXhwIjoxNzQ4NjQ0OTk4fQ.At9L6LFryv82Ys_hmnZvrI9Xh7oS_voxcBB_2T9NZ60";

const mainCategories = ["English", "Arabic", "Kids"];
const imagePath =
  "/media/alshlkany/Shared/ShelfShare-client/public/books/book_2.png";
const generateRandomBook = () => {
  return {
    title: faker.book.title(),
    description: faker.lorem.sentences(2),
    mainCategory: faker.helpers.arrayElement(mainCategories),
    subCategory: faker.book.genre(),
    price: faker.commerce.price(10, 100, 0),
    ISBN: faker.commerce.isbn(),
    author: faker.book.author(),
    qty: faker.number.int({ min: 1, max: 50 }),
  };
};

const addRandomBooks = async () => {
  try {
    for (let i = 0; i < NUMBER_OF_BOOKS; i++) {
      const book = generateRandomBook();

      const formData = new FormData();
      formData.append("title", book.title);
      formData.append("description", book.description);
      formData.append("mainCategory", book.mainCategory);
      formData.append("subCategory", book.subCategory);
      formData.append("price", book.price);
      formData.append("ISBN", book.ISBN);
      formData.append("author", book.author);
      formData.append("qty", book.qty);

      const fileStream = fs.createReadStream(imagePath);
      formData.append("image", fileStream, "book.jpg");

      await axios.post(API_URL, formData, {
        headers: {
          ...formData.getHeaders(),
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      console.log(`Book-${i + 1}: ${book.title}`);
    }
  } catch (err) {
    console.error(err.response.data.message);
  }
};

addRandomBooks();
