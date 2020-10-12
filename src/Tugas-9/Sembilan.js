import React from 'react';

class Sembilan extends React.Component {
  render() {
  return (
    <div className="App" style={{width:'80%',height:'500px',border:'5px solid black',color:'black',margin:'40px auto'}}>
        <h1 style={{margin:'30px auto'}}>Form Pembelian Buah</h1>
        <form style={{width:'50%',float:"left",}}>
          <h2>Nama Pelanggan</h2>
          <h2 style={{marginTop:'200px',marginLeft:'-65px'}}>Daftar Item</h2>
        </form>
        <form>
        <input style={{boxSizing:'border-box',width:'30%', margin:'25px 0px',marginLeft:'-400px'}}></input>
        <form>
        <input style={{boxSizing:'border-box',width:'20px', margin:'25px 0px',marginLeft:'-700px',marginTop:'-100px'}}></input>
        <br></br>
        <input style={{boxSizing:'border-box',width:'20px', margin:'25px 0px',marginLeft:'-700px',marginTop:'-100px'}}></input>
        <br></br>
        <input style={{boxSizing:'border-box',width:'20px', margin:'25px 0px',marginLeft:'-700px',marginTop:'-100px'}}></input>
        <br></br>
        <input style={{boxSizing:'border-box',width:'20px', margin:'25px 0px',marginLeft:'-700px',marginTop:'-100px'}}></input>
        <br></br>
        <input style={{boxSizing:'border-box',width:'20px', margin:'25px 0px',marginLeft:'-700px',marginTop:'-100px'}}></input>
        </form>
        <h3 style={{float:'right',marginTop:'-230px',marginRight:'500px'}}>Semangka</h3>
        <h3 style={{float:'right',marginTop:'-185px',marginRight:'500px'}}>Semangka</h3>
        <h3 style={{float:'right',marginTop:'-138px',marginRight:'500px'}}>Semangka</h3>
        <h3 style={{float:'right',marginTop:'-92px',marginRight:'500px'}}>Semangka</h3>
        <h3 style={{float:'right',marginTop:'-45px',marginRight:'500px'}}>Semangka</h3>
        </form>
        <button type='submit' style={{padding:'5px',margin:'20px',marginLeft:'-650px'}}>Kirim</button>
    </div>
  );
  }
}


export default Sembilan;
