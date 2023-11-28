import React from 'react'

export const UserProfile = () => {
  
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');


    const getUserProfile = async (e) => {
      e.preventDefault();
      
      try {

        setEmail('');
        setPassword('');
        // Make a PUT request to the updateProfile endpoint
        
        const response = await axios.put('/auth/', { email, password }, 
        {
          headers: {"Content-Type": 'application/json'},
        }
        );
  
        window.location.href = '/';
        
      } catch (error) {
        alert('Password Incorreta');
        console.log('errr', error);
        setErrMsg(error.response.data.message);
        alert(error.response.data.message);
      }
    };
    
  
    const handleProfileUpdate = async (e) => {
      e.preventDefault();
      
      try {
        setName('');
        setEmail('');
        setPassword('');
        setLocation('');
        setPhoneNumber('');
        // Make a PUT request to the updateProfile endpoint
        
        const response = await axios.put('/auth/userProfile/:id', { email, password }, 
        {
          headers: {"Content-Type": 'application/json'},
        }
        );
  
        window.location.href = '//auth/userProfile/:id';
        
      } catch (error) {
        console.log('errr', error);
        setErrMsg(error.response.data.message);
        alert(error.response.data.message);
      }
    };
  
  
    return (
    <div className="App">
        <form onSubmit={handleProfileUpdate}>
        <h2>Perfil de Utilizador</h2>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" value={name} onChange={(e) => setName(e.target.value)} />

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setPassword(e.target.value)} />
        
        <label for="phoneNumber">Celular:</label>
        <input type="tel" id="tel" name="phoneNumber" value={phoneNumber} onChange={(e) => setPassword(e.target.value)} />
        
        <label for="localizacao">Localização:</label>
        <input type="text" id="location" name="location" value={location} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Atualizar Perfil</button>
      </form>
    </div>    
  )
}

export default UserProfile