import axios from "axios";
import { faker } from "@faker-js/faker";

const API_URL = "http://localhost:5000/api/book";
const NUMBER_OF_BOOKS = 100;
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MDY0MjU3NzY2ZjBkMTljZDEzNGQxZCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc0NTM5MzM1MSwiZXhwIjoxNzQ3OTg1MzUxfQ.8sKuU-L2PO0uCLeUc270mF-LzDMe0PUwuK_3CosSQrM";

const mainCategories = ["English", "Arabic", "Kids-Arabic", "Kids-English"];

const generateRandomBook = () => {
  return {
    title: faker.book.title(),
    description: faker.lorem.sentences(2),
    mainCategory: faker.helpers.arrayElement(mainCategories),
    subCategory: faker.book.genre(),
    price: faker.commerce.price(10, 100, 2),
    ISBN: faker.commerce.isbn(),
    author: faker.book.author(),
    qty: faker.number.int({ min: 1, max: 50 }),
    image: faker.image.urlLoremFlickr(),
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

      const response = await axios.get(book.image, {
        responseType: "arraybuffer",
      });
      const blob = new Blob([response.data], { type: "image/jpeg" });
      const file = new File([blob], "book.jpg", { type: "image/jpeg" });
      formData.append("image", file);

      await axios.post(API_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      console.log(`Book-${i + 1}: ${book.title}`);
    }
  } catch (err) {
    console.error(err);
  }
};

addRandomBooks();
