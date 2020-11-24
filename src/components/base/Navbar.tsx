import React from 'react'
import {Link, NavLink, Route} from "react-router-dom"
import {makeStyles, WithStyles, withStyles} from '@material-ui/styles'
import RouteModel from "../../models/RouteModel"

interface IProps extends WithStyles<typeof styles> {
    routes: RouteModel[]
}

interface IState {
}

const styles = () => ({
    links: {
        listStyleType: 'none',
        margin: '0',
        padding: '0',
        overflow: 'hidden',
        backgroundColor: '#333',
        position: 'sticky' as 'sticky',
        top: '0',
    },
    link: {
        float: 'left' as 'left',
        '& a': {
            display: 'block',
            color: 'white',
            textAlign: 'center',
            padding: '14px 16px',
            textDecoration: 'none',
        },
        '& a:hover': {
            backgroundColor: '#111'
        },
        '& .active': {
            backgroundColor: '#4CAF50'
        },
    },
})

class Navbar extends React.Component<IProps, IState> {
    constructor(props: IProps | Readonly<IProps>) {
        super(props)
    }
  render() {
      const routes = this.props.routes
      const { classes } = this.props
      return (
          <ul className={classes.links}>
              <li className={classes.link}>
                  <NavLink
                      to='/'
                      activeClassName='active'
                      exact={true}
                  >
                      Home
                  </NavLink>
              </li>
              {
                  routes.map(
                      routeModel =>
                          <li className={classes.link}>
                              <NavLink
                                  to={routeModel.path}
                                  activeClassName='active'
                              >
                                  {routeModel.name}
                              </NavLink>
                          </li>
                  )
              }
          </ul>
      )
  }
}

export default withStyles(styles)(Navbar)
