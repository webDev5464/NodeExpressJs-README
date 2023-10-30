import { useEffect, useState } from "react";

export default function GetMethod() {
  const [getArticle, setGetArticle] = useState([]);

  useEffect(() => {
    fetch('http://localhost:53779/clientDataGet').then(response => response.json()).then(data => {
      setGetArticle(data.msg)
    })
  }, []);

  return (
    <>
      <section>
        <h2>Data fetched from the server:</h2>

        <div>
          {getArticle.map((x) => (
            <p key={x._id}>
              <span>{x.fname} {x.lname}</span>
              <span>{x.email}</span>
              <span>{x.pass}</span>
            </p>
          ))}
        </div>

      </section>
    </>
  );
}
