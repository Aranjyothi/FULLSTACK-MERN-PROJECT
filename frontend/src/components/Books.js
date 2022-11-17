import axios from "axios";

import { useEffect, useRef, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { AiFillEdit } from "react-icons/ai";

import booksService from "../services/books-service";

function Books({ user }) {
  const [createuser, setCreateuser] = useState([]);
  const [bookid, setBookId] = useState(null);

  let notesRef = useRef();
  let newNotesRef = useRef();

  const getAllBooks = async () => {
    try {
      const response = await booksService.index();
      console.log(response.data);
      setCreateuser(response.data.create);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let newBook = {
      notes: notesRef.current.value,
      user,
    };

    try {
      console.log(1);
      const response = await booksService.add(newBook);
      console.log(response);
      setCreateuser([...createuser, response.data.createuser]);
      notesRef.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };
  const handlechange = async (id) => {
    setBookId(id);
  };
  const handleUpdate = async () => {
    console.log("handleUpdate");
    try {
      const response = await booksService.update(
        bookid,
        newNotesRef.current.value
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handledelete = async (e) => {
    try {
      const response = await booksService.clear();
      // setCreateuser([...createuser,response.data])
      // notesRef.current.value = ""
    } catch (error) {
      console.lot(error);
    }
  };

  return (
    <div>
      <h2>Add Books to your collection</h2>

      <ol
        style={{
          display: "flex",
          // alignItems: "end",
          flexDirection: "column",
          height: "100%",
          padding: "20px",
        }}
      >
        <h2>
          Favorite books:
          {createuser?.map((c) => (
            // {console.log(c)}
            <li className="li" key={c._id}>
              {" "}
              {c.notes}
              {/* <button onClick={handledelete}>Del</button> */}
              <span onClick={handledelete}>
                <TiDeleteOutline />
              </span>
              {/* <button onClick={()=>handlechange(c._id)}>Edit</button> */}
              <span onClick={() => handlechange(c._id)}>
                <AiFillEdit />
              </span>
              {bookid === c._id && (
                <>
                  <input type="text" defaultValue={c.notes} ref={newNotesRef} />
                  <input type="submit" onClick={handleUpdate} />
                </>
              )}
            </li>
          ))}
        </h2>
      </ol>

      <form className="book" onSubmit={handleSubmit}>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          ref={notesRef}
          placeholder="text"
        />

        {/* <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label> */}
        <br />
        <button type="submit" class="btn btn-primary">
          Add Book
        </button>
      </form>
      {/* <form className="book" onSubmit={handleSubmit}>
        <input type="text" ref={notesRef} />
        <br />
        <br />
        <button>Add Book</button>
      </form> */}
    </div>
  );
}

export default Books;
