import { Link, useLocation } from "react-router-dom";

export const Breadcrumbs = () => {
  const location = useLocation();

  const pathnames = location.pathname.split('/').filter(x=>x);

  return (
    <nav aria-label="breadcrumbs">
      <ol className="breadcrumbs container-2">
        <li className="breadcrumbs__items">
          <Link to="/home">inicio</Link>
        </li>
        {
        pathnames.map((name, index) => {

          const link = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return  isLast ? 
          
          (
            <li className="breadcrumbs__items">
                <span>{'>'}</span>
                <span aria-current="page" className="breadcrumbs__items active" key={ name } to= { link }>{ name }</span> 
            </li> 
          )
          
          :

          (
            <li className="breadcrumbs__items">
                <span>{'>'}</span>
                <Link className="breadcrumbs__items" key={ name } to= { link }>{ name }</Link>
            </li> 
          )
          
        })
      }

      </ol>
      
      
    </nav>
  );
};

/* 
import { useParams } from 'react-router-dom';

export const Breadcrumbs = () => {
  const { name, id } = useParams();
  return (
    <nav>
      {name && <span>Category: {name}</span>}
      {id && <span>Product ID: {id}</span>}
    </nav>
  );
};
*/
