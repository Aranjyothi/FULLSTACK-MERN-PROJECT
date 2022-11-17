# FULLSTACK-MERN-PROJECT
site is live at: https://calm-naiad-6aaf43.netlify.app
## About the Books App"
Book App user can create favorite books list and store their list of books for easy access. User can also delete or edit their list of the books. 

## Technologies that i have used:
React, express, Node, HTML, CSS, JavaScript, mongoDB, bootStrap 

# Instalastions are:
For the **Books App** some packages that may need to be install:
### For Frontend:
react
bootstrap for CSS
axios
### Backend:
express
mongoDB
dotenv
node_modules
JWT
bcrypt
cors
### To run both servers:
I installed **concurrently**.

## Routes
Routes are avaliable as bookshelf
**/signup**
**/login**
**/contact**
**/Home**
**/user**
**/About**
**/books**

## Challenges are:
During my Project I face so technical challenges. My main challengers are how to redirect routes.
## Code:
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
## Future Implimentations:
* Need to create more pages for User like favorite books, fiction, and nonFiction pages .
* Adding more details about my **Books App** for the customer can store all the books related information.

