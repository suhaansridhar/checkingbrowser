import {useLoaderData, Link} from 'react-router-dom'

export default function Careers(){
    const careers = useLoaderData();
  return (
    <div>
        <h1>This is a careers layout</h1><br />
        {careers.map(career => (
            <Link to="/" key={career.id}>
                <p>{career.title}</p>
                <p>{career.Salary}</p>
            </Link>
        ))}
    </div>
  )
}

export const careerLoader = async() => {
    const res = await fetch('http://localhost:4000/careers');
  
    return res.json();
  }
