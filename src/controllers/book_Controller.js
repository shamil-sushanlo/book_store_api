function getBook(req, res, next){
    try {
      res.send('hello world')
    } catch (err) {
      console.log(err);
    }
  };
export default getBook;