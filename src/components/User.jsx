import './user.css';

function User(props) {
  // props este un obiect creat de React, care are drept chei 'atributele' de HTML folosite la crearea componentei UserItem (vezi in App.js).

  console.log(props);
  // Pentru a extrage atributele obiectului props, folosim object destructuring.
  const {nume, varsta} = props;

  aux();

  // Intr-o componenta intotdeauna este returnat un singur tag de HTML.
  // Daca avem nevoie de mai multe tag-uri de HTML, le impachetam intr-un tag principal.
  return (
    <div className='user'>
      {/* Folosim {} pentru a integra expresii de JS in taguri de HTML. */}
      <h2>Nume: {nume} </h2>
      <p>Varsta: {varsta - 100}</p>
    </div>
  )
}

function aux() {
  console.log(" Other things");
}

// Pentru a putea fi utilizata in alte locuri, componenta este exportata.
export default User;