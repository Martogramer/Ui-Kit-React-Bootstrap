import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  Form,
  ListGroup, 
  ListGroupItem, 
  Spinner,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
} from "reactstrap";
import { useGetAllUsersQuery } from "services/authApi";
import { useGetUsersQuery } from "services/getUsers";
import { useAllUsers } from "services/hooks/useAllUsers";

// core components

function Users() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const {isLoading, isError } = useGetUsersQuery()
  const { allUsers } = useAllUsers();
  const users = allUsers?.map((dest) => dest);
  console.log(users)

  if (isLoading) {
    return <Spinner color="primary" />;
  }

  if (isError) {
    return <div>Ha ocurrido un error al obtener los usuarios.</div>;
  }
  return (
    <>
      <Col className="ml-auto mr-auto" md="4">
        <Card className="card-login card-plain">
          <ListGroup>
            {/* {users.map((user) => (
              <ListGroupItem key={user.id}>
                {user}
              </ListGroupItem>
            ))} */}
            
            {users?.map((i) => (
                <tr>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {i.username}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {i.email}
                  </td>
                  <th>
                    <img className="w-10 rounded-full" src={i.avatar} />
                  </th>
                </tr>
              ))}
          </ListGroup>
        </Card>
      </Col>
    </>
  );
}

export default Users;
