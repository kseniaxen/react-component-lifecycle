import React from 'react'
import {Link, Route} from "react-router-dom"
import RouteModel from "../../models/RouteModel";

interface IProps {
    routes: RouteModel[]
}

interface IState {
}

export class Navbar extends React.Component<IProps, IState> {
    constructor(props: IProps | Readonly<IProps>) {
        super(props)
    }
  render() {
      const routes = this.props.routes
      return (
          <nav>
              {
                  routes.map(
                      routeModel =>
                          <Link
                              to={routeModel.path}>
                              {routeModel.name}
                          </Link>
                  )
              }
          </nav>
      )
  }
}
