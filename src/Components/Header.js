import Navbar from "react-bootstrap";
import Container from "react-bootstrap";

export function Header ( props ) {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>
                    Hello World
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
