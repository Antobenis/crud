import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import { ListGroup } from 'react-bootstrap';
export const View = () => {
  const [info, setInfo] = React.useState(null);

  const { id } = useParams();

  React.useEffect(() => {
    if (id) {
      // Make a request for a user with a given ID
      axios.get(`https://reqres.in/api/users5/${id}`)
        .then(function (response) {
          // handle success
          setInfo(response?.data?.data)
        }).catch(function (error) {
          // handle error
          console.log(error);
        }).then(function () {
          // always executed
        });
    }
  }, [id]);

  return (
    <>

      <ListGroup.Item>
        <span className="span-lbl">#</span>
        <input type="text" name="id" defaultValue={info && info.name}  />
        {/*{user && user.id}*/}
      </ListGroup.Item></>
    // <Table striped bordered hover>
    //   <thead>
    //     <tr>
    //       <th>Sl.No</th>
    //       <th>Name</th>
    //       <th>Year</th>
    //       <th>color</th>
    //     </tr>
    //   </thead>
    //   <tbody>

    //       <tr >
    //         <td>{info && info.id}</td>
    //         <td>{info && info.name}</td>
    //         <td>{info && info.year}</td>
    //         <td>{info && info.color}</td>
    //       </tr>

    //   </tbody>
    // </Table>

  )
}