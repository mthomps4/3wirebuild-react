import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import Progress from 'reactstrap/lib/Progress';

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand id="homeBtn" href="/">
                        3WireBuild
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/thedeveloper">
                                    the Developer
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/thecraftsman">
                                    the Craftsman
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/blog">Blog</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/resources">Resources</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Progress color="info" value="100" style={{ height: '5px' }} />
            </div>
        );
    }
}
