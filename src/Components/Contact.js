export default function Contact(){
    return(
        <div className="contact--container">
            <label htmlFor="name">Name</label>
            <input type="text" />
            <label htmlFor="email">Email</label>
            <input type="email" />
            <button type="submit">Submit</button>
        </div>
    )
}
