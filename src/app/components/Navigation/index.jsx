import Link from 'next/link'
import style from './Navigation.module.css'

const links =[
    {
      label:"Home",
      route:'/'  
    },
    {
      label:"About",
      route:'/About'  
    },
    {
      label:"Ejemplo UseState",
      route:'/Exampleuno'
    }
  
  ]

  export function Navigation(){
    return(
        <header className={style.header}>
          <nav>
            <ul className={style.navigation}>
              {links.map(({label, route}) => (
                <li key={route}>
                  <Link href={route}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
    )
  }