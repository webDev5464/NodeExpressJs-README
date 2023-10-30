import { useState } from "react"
import axios from 'axios'

export default function PostData() {

  const [clientData, setClientData] = useState({
    fname: '',
    lname: '',
    email: '',
    pass: ''
  })

  const formHandler = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:53779/clientDataPost", clientData).then((x) => {
      alert(x.data.msg)
    })
  }

  const formData = (e) => {
    const { name, value } = e.target
    setClientData({ ...clientData, [name]: value })
  }

  return (
    <form onSubmit={formHandler}>
      <input type="text" name="fname" placeholder="First Name :" required value={clientData.fname} onChange={formData} />
      <input type="text" name="lname" placeholder="Last Name :" required value={clientData.lname} onChange={formData} />
      <input type="email" name="email" placeholder="Email :" required value={clientData.email} onChange={formData} />
      <input type="password" name="pass" placeholder="Password :" required value={clientData.pass} onChange={formData} />
      <input type="submit" value="Submit" />
    </form>
  )
}