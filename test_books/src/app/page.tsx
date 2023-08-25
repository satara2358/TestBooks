"use client";
import { useState } from "react";
import data from "../books.json"; 

console.log(data);

export interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: {
    name: string;
    otherBooks: string[];
  }
}

const books: Book[] = data.library.map((data) => data.book)

console.log(books);

export default function Home() {
  const [genre, setGenre] = useState<string>('');
  const matches = genre 
    ? books.filter((book) => {
      if(book.genre !== genre) return false;
      return true;
      })
      : books;
  return (
    <article>
      <nav>
        <select value={genre} onChange={(event) => setGenre(event.target.value)}>
          <option value="">Todos</option>
          <option value="Fantasía">Fantasia</option>
          <option value="Ciencia ficción">Ciencia Ficción</option>
        </select>
      </nav>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr)] gap-4">
        {matches.map((book) => (
          <li key={book.ISBN}>
            <img className="aspect-[9/14] object-cover" src={book.cover} alt={book.title}/>
            <p>{book.title}</p>
          </li>  
        ))}
      </ul>
    </article>
    
  )
}
